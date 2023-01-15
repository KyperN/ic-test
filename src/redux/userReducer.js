const init = { isAuth: false, user: {} };

export const userReducer = (state = init, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log('login camein');
      return { ...state, isAuth: true, user: action.payload };
    case 'LOGOUT':
      console.log('logout camein');
      return { ...state, isAuth: false, user: {} };
    case 'UPDATE_FIELD': {
      console.log('updating field');
      const { field, value } = action.payload;
      return { ...state, user: { ...state.user, [field]: value } };
    }
    default:
      return state;
  }
};
