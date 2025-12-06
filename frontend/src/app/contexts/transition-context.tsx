'use client';

import { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface TransitionContextType {
  startTransition: () => void;
  isLoading: boolean;
  isAnimating: boolean;
  isBlurred: boolean;
  direction: 'down' | 'up';
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true); // Inicia como true para primeira carga
  const [isAnimating, setIsAnimating] = useState(false);
  const [isBlurred, setIsBlurred] = useState(true); // Inicia como true para primeira carga
  const [direction, setDirection] = useState<'down' | 'up'>('down');
  const transitionCount = useRef(0);
  const isFirstLoad = useRef(true);

  // Primeira carga - mesma animação do primeiro carregamento
  useEffect(() => {
    if (isFirstLoad.current) {
      const timer = setTimeout(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => {
            setIsBlurred(false);
          }, 300);
        }, 1200);
      }, 100);
      isFirstLoad.current = false;
      return () => clearTimeout(timer);
    }
  }, []);

  const startTransition = () => {
    setIsLoading(true);
    setIsBlurred(true);
    setIsAnimating(true);
    
    // Alterna a direção
    transitionCount.current += 1;
    setDirection(transitionCount.current % 2 === 1 ? 'down' : 'up');
    
    // Mesma duração do primeiro carregamento (1200ms)
    const curtainDuration = 1200;
    const blurDelay = 300;
    
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setIsBlurred(false);
      }, blurDelay);
    }, curtainDuration);
  };

  return (
    <TransitionContext.Provider value={{ startTransition, isLoading, isAnimating, isBlurred, direction }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransition must be used within TransitionProvider');
  }
  return context;
}

