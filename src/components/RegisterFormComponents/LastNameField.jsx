import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import useValidation from '../../hooks/useValidation';
import { isValid } from '../../misc/isValid';
import { useDispatch } from 'react-redux';
import { setLastNameError } from '../../redux/actions';
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
      setLastNameError(dispatch, false);
    } else {
      setLastNameError(dispatch, true);
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
