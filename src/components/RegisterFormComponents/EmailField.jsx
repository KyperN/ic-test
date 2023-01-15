import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import useValidation from '../../hooks/useValidation';
import { isValid } from '../../misc/isValid';
import { emailPattern } from '../../misc/patterns';
import { useDispatch } from 'react-redux';
import { setEmailError } from '../../redux/actions';
import usePatternError from '../../hooks/usePatternError';
const EmailField = ({
  email,
  handleUserInput,
  isForLogin = false,
  handleLoginEmail,
}) => {
  const isPatternError = usePatternError(emailPattern, email);
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
    }
  };

  useEffect(() => {
    if (!isEmpty && !minLengthError && !isPatternError) {
      setEmailError(dispatch, false);
    } else {
      setEmailError(dispatch, true);
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
      {isForLogin
        ? null
        : isValid(isEmpty, minLengthError, isPatternError, 'Wrong format')}
    </Form.Group>
  );
};

export default EmailField;
