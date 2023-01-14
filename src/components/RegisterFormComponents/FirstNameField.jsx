import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import useValidation from '../../hooks/useValidation';
import { isValid } from '../../misc/isValid';
import { useDispatch } from 'react-redux';
const FirstNameField = ({ firstName, handleUserInput }) => {
  const dispatch = useDispatch();
  const { isEmpty, minLengthError } = useValidation(firstName, {
    isEmpty: true,
    minLength: 1,
  });
  const formatInput = (e) => {
    e.target.value = e.target.value.replace(/\d+/g, '');
    handleUserInput(e);
  };
  useEffect(() => {
    if (!isEmpty && !minLengthError) {
      dispatch({
        type: 'FIRST_NAME_ERROR',
        payload: false,
      });
    } else {
      dispatch({
        type: 'FIRST_NAME_ERROR',
        payload: true,
      });
    }
  }, [firstName, isEmpty, minLengthError, dispatch]);
  return (
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>First name</Form.Label>
      <Form.Control
        onChange={(e) => {
          formatInput(e);
        }}
        name="firstName"
        value={firstName}
        placeholder="Enter first name"
      />
      {isValid(isEmpty, minLengthError)}
    </Form.Group>
  );
};

export default FirstNameField;
