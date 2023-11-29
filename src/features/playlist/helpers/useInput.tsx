"use client";
import { useCallback, useMemo, useState } from "react";

const useInput = (isRequired = true) => {
  const [value, setValue] = useState("");
  const isValid = useMemo(
    () => (isRequired ? value !== "" : true),
    [isRequired, value],
  );
  const onChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);
  const onClear = useCallback(() => {
    setValue("");
  }, []);

  return {
    value,
    isValid,
    onChange,
    onClear,
  };
};

export default useInput;
