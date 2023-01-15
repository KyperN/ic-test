import { useEffect, useState } from 'react';

const usePatternError = (pattern, value) => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (pattern.test(value)) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [value, pattern]);

  return isError;
};

export default usePatternError;
