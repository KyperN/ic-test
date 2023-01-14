const init = { isAuth: false, user: {} };

export const userReducer = (state = init, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuth: true, user: action.payload };
    case 'LOGOUT':
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
