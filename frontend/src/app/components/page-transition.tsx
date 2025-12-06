'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
  isFirstLoad?: boolean;
}

export default function PageTransition({ children, isFirstLoad = false }: PageTransitionProps) {
  const [isLoading, setIsLoading] = useState(isFirstLoad);
  const [isAnimating, setIsAnimating] = useState(isFirstLoad);
  const [isBlurred, setIsBlurred] = useState(isFirstLoad);
  const [direction, setDirection] = useState<'down' | 'up'>('down');
  const pathname = usePathname();

  const curtainDuration = isFirstLoad ? 1200 : 600;
  const blurDuration = isFirstLoad ? 700 : 400;

  useEffect(() => {
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => {
            setIsBlurred(false);
          }, 300);
        }, curtainDuration);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(true);
      setIsBlurred(true);
      setIsAnimating(true);
      
      setDirection(prev => prev === 'down' ? 'up' : 'down');
      
      const timer = setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          setIsBlurred(false);
        }, 200);
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [pathname, isFirstLoad, curtainDuration]);

  const curtainTransform = direction === 'down' 
    ? (isLoading ? 'translate-y-0' : 'translate-y-full')
    : (isLoading ? 'translate-y-0' : '-translate-y-full');

  return (
    <>
      {isAnimating && (
        <div 
          className={`fixed inset-0 z-50 pointer-events-none transition-transform ease-in-out ${
            curtainTransform
          }`}
          style={{ 
            backgroundColor: '#ECE7C1',
            transitionDuration: `${curtainDuration}ms`
          }}
        />
      )}

      <div 
        className={`flex flex-col lg:flex-row min-h-screen transition-all ease-in-out ${
          isLoading 
            ? 'opacity-0 blur-md' 
            : isBlurred 
              ? 'opacity-100 blur-md' 
              : 'opacity-100 blur-0'
        }`}
        style={{ 
          backgroundColor: '#1A1A18',
          transitionDuration: `${blurDuration}ms`
        }}
      >
        {children}
      </div>
    </>
  );
}

