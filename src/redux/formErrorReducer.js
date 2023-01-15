const init = {
  emailError: true,
  firstNameError: true,
  lastNameError: true,
  passwordError: true,
  dobError: true,
  phoneError: true,
};

export const formErrorReducer = (state = init, action) => {
  switch (action.type) {
    case 'EMAIL_ERROR':
      return { ...state, emailError: action.payload };
    case 'FIRST_NAME_ERROR':
      return { ...state, firstNameError: action.payload };
    case 'LAST_NAME_ERROR':
      return { ...state, lastNameError: action.payload };
    case 'PASSWORD_ERROR': {
      return { ...state, passwordError: action.payload };
    }
    case 'DOB_ERROR': {
      return { ...state, dobError: action.payload };
    }
    case 'PHONE_ERROR': {
      return { ...state, phoneError: action.payload };
    }
    case 'RESET_ERRORS': {
      return { ...state, init };
    }
    default:
      return state;
  }
};
