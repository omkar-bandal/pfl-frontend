import { useEffect, useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = <T extends any[], U>(
  func: (...args: T) => U,
  delay: number
): ((...args: T) => void) => {
  let timeout: NodeJS.Timeout;

  return (...args: T) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
