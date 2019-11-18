import { useState, useEffect } from "react";
export function useInput({ validate, initialValue }) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(false);
  const [dirty, setDirty] = useState(false);

  const onChange = e => setValue(e.target.value);

  const onBlur = e => setDirty(true);

  const onFocus = () => setDirty(false);

  useEffect(() => {
    if (dirty && !validate(value)) {
      setError(true);
    } else {
      setError(false);
    }
  }, [value, dirty]);

  return { value, onChange, onBlur, onFocus, error };
}
