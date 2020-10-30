import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function useStoryState<T>(
  propsValue: T | (() => T),
): [value: T, setValue: Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(propsValue);
  useEffect(() => {
    setValue(propsValue);
  }, [propsValue]);

  return [value, setValue];
}
