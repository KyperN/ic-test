import FormError from '../components/RegisterFormComponents/FormError';

export const isValid = (
  isEmpty,
  isMinLengthError,
  isPatternError = false,
  text
) => {
  switch (true) {
    case isEmpty: {
      return <FormError text="Cant be empty" />;
    }
    case isMinLengthError: {
      return <FormError text="Too short" />;
    }
    case isPatternError: {
      return <FormError text={text} />;
    }
    default: {
      return null;
    }
  }
};
