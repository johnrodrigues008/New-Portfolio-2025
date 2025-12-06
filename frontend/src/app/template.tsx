'use client';

import { useTransition } from './contexts/transition-context';

export default function Template({ children }: { children: React.ReactNode }) {
  const { isLoading, isAnimating, isBlurred, direction } = useTransition();

  const curtainTransform = direction === 'down' 
    ? (isLoading ? 'translate-y-0' : 'translate-y-full')
    : (isLoading ? 'translate-y-0' : '-translate-y-full');

  const curtainDuration = 1200;
  const blurDuration = 700;

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
        className={`transition-all ease-in-out ${
          isLoading 
            ? 'opacity-0 blur-md' 
            : isBlurred 
              ? 'opacity-100 blur-md' 
              : 'opacity-100 blur-0'
        }`}
        style={{ 
          transitionDuration: `${blurDuration}ms`
        }}
      >
        {children}
      </div>
    </>
  );
}

