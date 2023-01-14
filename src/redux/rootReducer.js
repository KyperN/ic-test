import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { formErrorReducer } from './formErrorReducer';
export const rootReducer = combineReducers({
  user: userReducer,
  formError: formErrorReducer,
});
