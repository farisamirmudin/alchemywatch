import { useState, useEffect } from "react";
export const useDebouncer = (input: string, delay = 500) => {
  const [debouncerValue, setDebouncerValue] = useState(input);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncerValue(input);
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [input, delay]);
  return debouncerValue;
};
