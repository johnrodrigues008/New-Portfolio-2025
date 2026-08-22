'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
} from 'react';

interface TransitionContextType {
  startTransition: () => void;
  isLoading: boolean;
  isAnimating: boolean;
  isBlurred: boolean;
  direction: 'down' | 'up';
}

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined
);

export function TransitionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [direction, setDirection] = useState<'down' | 'up'>('down');

  const transitionCount = useRef(0);
  const isFirstLoad = useRef(true);

  /**
   * Primeira carga
   */
  useEffect(() => {
    if (!isFirstLoad.current) {
      return;
    }

    isFirstLoad.current = false;

    // Pequeno delay para garantir que o DOM já esteja montado.
    const startTimer = window.setTimeout(() => {
      setIsLoading(true);
      setIsAnimating(true);
      setIsBlurred(true);

      // Duração da cortina
      const loadingTimer = window.setTimeout(() => {
        setIsLoading(false);

        // Tempo para o blur desaparecer suavemente
        const blurTimer = window.setTimeout(() => {
          setIsBlurred(false);
          setIsAnimating(false);
        }, 300);

        return () => window.clearTimeout(blurTimer);
      }, 1200);

      return () => window.clearTimeout(loadingTimer);
    }, 100);

    return () => window.clearTimeout(startTimer);
  }, []);

  /**
   * Transição entre páginas
   */
  const startTransition = () => {
    setIsLoading(true);
    setIsBlurred(true);
    setIsAnimating(true);

    transitionCount.current += 1;

    setDirection(
      transitionCount.current % 2 === 1 ? 'down' : 'up'
    );

    const curtainDuration = 1200;
    const blurDelay = 300;

    window.setTimeout(() => {
      setIsLoading(false);

      window.setTimeout(() => {
        setIsBlurred(false);
        setIsAnimating(false);
      }, blurDelay);
    }, curtainDuration);
  };

  return (
    <TransitionContext.Provider
      value={{
        startTransition,
        isLoading,
        isAnimating,
        isBlurred,
        direction,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error(
      'useTransition must be used within TransitionProvider'
    );
  }

  return context;
}