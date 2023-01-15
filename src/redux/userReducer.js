const init = { isAuth: false, user: {} };

export const userReducer = (state = init, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuth: true, user: action.payload };
    case 'LOGOUT':
      return { ...state, isAuth: false, user: {} };
    case 'UPDATE_FIELD': {
      const { field, value } = action.payload;
      return { ...state, user: { ...state.user, [field]: value } };
    }
    default:
      return state;
  }
};
