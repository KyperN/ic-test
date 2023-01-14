export const setLastNameError = (dispatch, value) =>
  dispatch({
    type: 'LAST_NAME_ERROR',
    payload: value,
  });
export const setFirstNameError = (dispatch, value) => {
  dispatch({
    type: 'FIRST_NAME_ERROR',
    payload: value,
  });
};
export const setEmailError = (dispatch, value) => {
  dispatch({
    type: 'EMAIL_ERROR',
    payload: value,
  });
};
export const setDOBError = (dispatch, value) => {
  dispatch({
    type: 'DOB_ERROR',
    payload: value,
  });
};
export const setPHoneError = (dispatch, value) => {
  dispatch({
    type: 'PHONE_ERROR',
    payload: value,
  });
};
export const setPasswordError = (dispatch, value) => {
  dispatch({
    type: 'PASSWORD_ERROR',
    payload: value,
  });
};
