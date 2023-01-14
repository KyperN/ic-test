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
      console.log(state);
      return { ...state, passwordError: action.payload };
    }
    case 'DOB_ERROR': {
      console.log(state);
      return { ...state, dobError: action.payload };
    }
    case 'PHONE_ERROR': {
      console.log(state);
      return { ...state, phoneError: action.payload };
    }
    default:
      return state;
  }
};
