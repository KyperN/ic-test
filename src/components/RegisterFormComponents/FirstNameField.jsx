import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import useValidation from '../../hooks/useValidation';
import { isValid } from '../../misc/isValid';
import { useDispatch } from 'react-redux';
import { setFirstNameError } from '../../redux/actions';
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
      setFirstNameError(dispatch, false);
    } else {
      setFirstNameError(dispatch, true);
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
