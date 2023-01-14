import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { isValid } from '../../misc/isValid';
import useValidation from '../../hooks/useValidation';
import { passwordPattern } from '../../misc/patterns';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
const PasswordField = ({
  password,
  handleUserInput,
  isForLogin = false,
  handleLoginPassword,
}) => {
  const [isPatternError, setIsPatternError] = useState(false);
  const { isEmpty, minLengthError } = useValidation(password, {
    isEmpty: true,
    minLength: 8,
  });

  const dispatch = useDispatch();
  const passwordErrorText =
    'Your password should contain atleast: 1 Uppercase, 1 Lowercase, 1 digit and special character and be longer than 8';

  const handleChange = (e) => {
    if (isForLogin) {
      handleLoginPassword(e, 'password');
    } else {
      handleUserInput(e);
      setIsPatternError(!passwordPattern.test(e.target.value));
    }
  };

  useEffect(() => {
    if (!isEmpty && !minLengthError && !isPatternError) {
      dispatch({
        type: 'PASSWORD_ERROR',
        payload: false,
      });
    } else {
      dispatch({
        type: 'PASSWORD_ERROR',
        payload: true,
      });
    }
  }, [password, isEmpty, minLengthError, dispatch, isPatternError]);
  return (
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
        minLength={8}
        onChange={(e) => {
          handleChange(e);
        }}
        name="password"
        value={password}
        type="password"
        placeholder="Password"
      />
      {isValid(isEmpty, minLengthError, isPatternError, passwordErrorText)}
    </Form.Group>
  );
};

export default PasswordField;
