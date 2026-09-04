"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from "react";

import { useSection, SECTION_IDS } from "../contexts/section-context";

type ScrollSectionsProps = {
  children: ReactNode;
};

const WHEEL_COOLDOWN_MS = 1400;

function canScrollInside(element: HTMLElement, deltaY: number) {
  const { scrollTop, scrollHeight, clientHeight } = element;
  const atTop = scrollTop <= 0;
  const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

  if (deltaY > 0) return !atBottom;
  if (deltaY < 0) return !atTop;
  return false;
}

export default function ScrollSections({ children }: ScrollSectionsProps) {
  const {
    activeIndex,
    isTransitioning,
    navigateToSection,
    goToNext,
    goToPrev,
  } = useSection();

  const containerRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const wheelLocked = useRef(false);
  const touchStartY = useRef(0);

  const navigateByDelta = useCallback(
    (deltaY: number) => {
      const currentPanel = panelRefs.current[activeIndex];
      if (
        currentPanel &&
        currentPanel.scrollHeight > currentPanel.clientHeight &&
        canScrollInside(currentPanel, deltaY)
      ) {
        return;
      }

      if (deltaY > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    },
    [activeIndex, goToNext, goToPrev]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (wheelLocked.current || isTransitioning) return;

      wheelLocked.current = true;
      navigateByDelta(event.deltaY);

      window.setTimeout(() => {
        wheelLocked.current = false;
      }, WHEEL_COOLDOWN_MS);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? 0;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (isTransitioning) return;

      const touchEndY = event.changedTouches[0]?.clientY ?? 0;
      const deltaY = touchStartY.current - touchEndY;

      if (Math.abs(deltaY) < 40) return;

      navigateByDelta(deltaY);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isTransitioning, navigateByDelta]);

  useEffect(() => {
    const panel = panelRefs.current[activeIndex];
    if (panel) {
      panel.scrollTop = 0;
    }
  }, [activeIndex]);

  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div
      ref={containerRef}
      className="relative h-[100dvh] w-full flex-1 overflow-hidden lg:h-screen"
      aria-live="polite"
    >
      <div
        className="flex h-full ease-in-out"
        style={{
          width: `${childArray.length * 100}%`,
          transform: `translateX(-${activeIndex * (100 / childArray.length)}%)`,
          transition: "transform 1200ms ease-in-out",
        }}
      >
        {childArray.map((child, index) => (
          <section
            key={SECTION_IDS[index] ?? index}
            ref={(node) => {
              panelRefs.current[index] = node;
            }}
            id={SECTION_IDS[index]}
            aria-hidden={index !== activeIndex}
            className="section-panel h-full overflow-y-auto overscroll-contain flex justify-center items-center"
            style={{ width: `${100 / childArray.length}%` }}
          >
            {child}
          </section>
        ))}
      </div>
    </div>
  );
}
