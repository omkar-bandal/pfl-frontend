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