import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import useValidation from '../../hooks/useValidation';
import { isValid } from '../../misc/isValid';
import { emailPattern } from '../../misc/patterns';
import { useDispatch } from 'react-redux';
const EmailField = ({
  email,
  handleUserInput,
  isForLogin = false,
  handleLoginEmail,
}) => {
  const [isPatternError, setIsPatternError] = useState(false);
  const { isEmpty, minLengthError } = useValidation(email, {
    isEmpty: true,
    minLength: 3,
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (isForLogin) {
      handleLoginEmail(e, 'email');
    } else {
      handleUserInput(e);
      setIsPatternError(!emailPattern.test(e.target.value));
    }
  };

  useEffect(() => {
    if (!isEmpty && !minLengthError && !isPatternError) {
      dispatch({
        type: 'EMAIL_ERROR',
        payload: false,
      });
    } else {
      dispatch({
        type: 'EMAIL_ERROR',
        payload: true,
      });
    }
  }, [email, isEmpty, minLengthError, dispatch, isPatternError]);
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control
        onChange={(e) => {
          handleChange(e);
        }}
        name="email"
        value={email}
        type="email"
        placeholder="name@example.com"
      />
      {isValid(isEmpty, minLengthError, isPatternError, 'Format Error')}
    </Form.Group>
  );
};

export default EmailField;
