import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import useValidation from '../../hooks/useValidation';
import { isValid } from '../../misc/isValid';
import { setDOBError } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { calculateAge } from '../../misc/calculateAge';
const DobField = ({ handleUserInput, dob }) => {
  const [isAgeError, setIsAgeError] = useState(false);
  const { isEmpty, minLengthError } = useValidation(dob, {
    isEmpty: true,
    minLength: 3,
  });
  const dispatch = useDispatch();
  const ageErrorText = 'Must be older than 18';

  const validateAge = (e) => {
    const age = calculateAge(e.target.value);
    setIsAgeError(age < 18);
  };

  useEffect(() => {
    if (!isEmpty && !minLengthError && !isAgeError) {
      setDOBError(dispatch, false);
    } else {
      setDOBError(dispatch, true);
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
