import { useRef, useCallback } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
type CallbackType = (...args: any[]) => void;

// eslint-disable-next-line max-len
export default function useDebounce<Callback extends CallbackType>(callback: Callback, delay: number) {
  const timer = useRef<NodeJS.Timeout | null>(null);

  return useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
}
/* eslint-enable @typescript-eslint/no-explicit-any */
