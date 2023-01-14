import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import useValidation from '../../hooks/useValidation';
import { isValid } from '../../misc/isValid';
import { useDispatch } from 'react-redux';
const DobField = ({ handleUserInput, dob }) => {
  const [isAgeError, setIsAgeError] = useState(false);
  const { isEmpty, minLengthError } = useValidation(dob, {
    isEmpty: true,
    minLength: 3,
  });
  const dispatch = useDispatch();
  const ageErrorText = 'Must be older than 18';
  const calculateAge = (dob) => {
    const birthdate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    return age;
  };

  const validateAge = (e) => {
    const age = calculateAge(e.target.value);
    if (age >= 18) {
      setIsAgeError(false);
    } else {
      setIsAgeError(true);
    }
  };

  useEffect(() => {
    if (!isEmpty && !minLengthError && !isAgeError) {
      dispatch({
        type: 'DOB_ERROR',
        payload: false,
      });
    } else {
      dispatch({
        type: 'DOB_ERROR',
        payload: true,
      });
    }
  }, [dob, isEmpty, minLengthError, isAgeError, dispatch]);

  return (
    <Form.Group controlId="dob">
      <Form.Label>Select Date</Form.Label>
      <Form.Control
        onChange={(e) => {
          handleUserInput(e);
          validateAge(e);
        }}
        value={dob}
        type="date"
        name="dob"
        placeholder="Date of Birth"
      />
      {isValid(isEmpty, minLengthError, isAgeError, ageErrorText)}
    </Form.Group>
  );
};

export default DobField;
