import { useState } from 'react';

export const useToggle = (initialValue = false) => {
  const [isOn, setIsOn] = useState(initialValue);
  const toggle = () => setIsOn((prev) => !prev);
  return { isOn, toggle };
};
