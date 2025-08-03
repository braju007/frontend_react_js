// customHooks/useThrottle.js
import { useEffect, useRef, useState } from 'react';

export const useThrottle = (value, delay) => {
  const [throttledValue, setThrottledValue] = useState(value);

  const lastCall = useRef(0);          // Track last call timestamp
  const lastResult = useRef(value);    // Cache last allowed value

  useEffect(() => {
    const now = Date.now();

    if (now - lastCall.current >= delay) {
      lastCall.current = now;
      lastResult.current = value;
      setThrottledValue(value);
    }
    // else: do nothing; throttle is active

  }, [value, delay]);

  return throttledValue;
};
