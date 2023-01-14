import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import useValidation from '../../hooks/useValidation';
import { isValid } from '../../misc/isValid';
import { useDispatch } from 'react-redux';
const LastNameField = ({ handleUserInput, lastName }) => {
  const dispatch = useDispatch();

  const formatInput = (e) => {
    e.target.value = e.target.value.replace(/\d+/g, '');
    handleUserInput(e);
  };

  const { isEmpty, minLengthError } = useValidation(lastName, {
    isEmpty: true,
    minLength: 1,
  });
  useEffect(() => {
    if (!isEmpty && !minLengthError) {
      dispatch({
        type: 'LAST_NAME_ERROR',
        payload: false,
      });
    } else {
      dispatch({
        type: 'LAST_NAME_ERROR',
        payload: true,
      });
    }
  }, [lastName, isEmpty, minLengthError, dispatch]);
  return (
    <Form.Group className="mb-3" controlId="formBasicLastName">
      <Form.Label>Last name</Form.Label>
      <Form.Control
        onChange={(e) => {
          formatInput(e);
        }}
        name="lastName"
        value={lastName}
        type="text"
        placeholder="Last name"
      />
      {isValid(isEmpty, minLengthError)}
    </Form.Group>
  );
};

export default LastNameField;
