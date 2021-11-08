import { useState, useEffect } from "react";
export const useLocalStorageState = (key, initValue) => {
  const getDefaultValue = () => {
    const value = localStorage.getItem(key);
    return value ? value : initValue;
  };
  const [value, setValue] = useState(getDefaultValue);
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  let setMsg = (msg) => {
    setValue(msg);
  };
  return [value, setMsg];
};
