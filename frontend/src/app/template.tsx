'use client';

import Footer from './components/footer';
import Navbar from './components/navbar';
import { useTransition } from './contexts/transition-context';
import { useTranslations } from './i18n';

export default function Template({ children }: { children: React.ReactNode }) {
  const { isLoading, isAnimating, isBlurred, direction } = useTransition();
  const t = useTranslations();

  const curtainTransform =
    direction === 'down'
      ? isLoading
        ? 'translate-y-0'
        : 'translate-y-full'
      : isLoading
        ? 'translate-y-0'
        : '-translate-y-full';

  const curtainDuration = 1200;
  const blurDuration = 700;

  return (
    <>
      {isAnimating && (
        <div
          className={`fixed inset-0 z-50 pointer-events-none transition-transform ease-in-out ${curtainTransform}`}
          style={{
            backgroundColor: '#ECE7C1',
            transitionDuration: `${curtainDuration}ms`,
          }}
        />
      )}

      <main
        className={`transition-all ease-in-out ${
          isLoading
            ? 'opacity-0 blur-md'
            : isBlurred
              ? 'opacity-100 blur-md'
              : 'opacity-100 blur-0'
        }`}
        style={{
          transitionDuration: `${blurDuration}ms`,
        }}
      >
        <div
          className="relative flex min-h-[100dvh] flex-col overflow-x-hidden lg:min-h-screen lg:flex-row-reverse lg:items-stretch lg:justify-center"
          style={{ backgroundColor: '#1A1A18' }}
        >
          {/* Desktop: right column — mega nav */}
          <Navbar />

          {children}
          
          <Footer />
            
        </div>
      </main>
    </>
  );
}