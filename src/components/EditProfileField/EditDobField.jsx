import React, { useEffect, useState } from 'react';
import { setDOBError, updateField } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import useValidation from '../../hooks/useValidation';
import { isValid } from '../../misc/isValid';
import { Button, Form } from 'react-bootstrap';
import { calculateAge } from '../../misc/calculateAge';
import { updateUserById } from '../../misc/updateUserData';

const users = require('../../misc/users.json');
const ageErrorText = 'Must be older than 18';

const EditDobField = ({ initialDob, userId }) => {
  const [newDob, setNewDob] = useState(initialDob);
  const [editMode, setEditMode] = useState(false);
  const [isAgeError, setIsAgeError] = useState(false);
  const { isEmpty, minLengthError } = useValidation(newDob, {
    isEmpty: false,
    minLength: 6,
  });
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setNewDob(e.target.value);
  };

  const validateAge = (e) => {
    const age = calculateAge(e.target.value);
    setIsAgeError(age < 18);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    console.log(users);
    setEditMode(false);
    updateUserById(userId, 'dob', newDob, users);
    updateField(dispatch, { field: 'dob', value: newDob });
  };

  useEffect(() => {
    if (!isEmpty && !minLengthError && !isAgeError) {
      setDOBError(dispatch, false);
    } else {
      setDOBError(dispatch, true);
    }
  }, [newDob, isEmpty, minLengthError, isAgeError, dispatch]);

  return (
    <Form.Group controlId="dob">
      <Form.Label>Select Date</Form.Label>
      <Form.Control
        disabled={!editMode}
        onChange={(e) => {
          handleInput(e);
          validateAge(e);
        }}
        value={newDob}
        type="date"
        name="dob"
        placeholder="Date of Birth"
      />
      <Button
        onClick={editMode ? handleSave : handleEdit}
        disabled={isEmpty || minLengthError || isAgeError}>
        {editMode ? `Save DOB` : `Edit DOB`}
      </Button>
      {isValid(isEmpty, minLengthError, isAgeError, ageErrorText)}
    </Form.Group>
  );
};

export default EditDobField;
