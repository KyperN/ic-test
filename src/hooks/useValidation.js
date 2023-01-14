import { useState } from 'react';
import { useEffect } from 'react';

const useValidation = (value, validations, pattern) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength': {
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        }
        case 'isEmpty': {
          console.log(value);
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        }
        default: {
          break;
        }
      }
    }
  }, [value]);
  return {
    isEmpty,
    minLengthError,
  };
};

export default useValidation;
