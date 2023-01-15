import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, FormControl, Button } from 'react-bootstrap';
import { updateUserById } from '../../misc/updateUserData';
import useValidation from '../../hooks/useValidation';
import { updateField } from '../../redux/actions';
import usePatternError from '../../hooks/usePatternError';
import { passwordPattern } from '../../misc/patterns';
const EditFormField = ({ field, value, userId, minLength, label }) => {
  const users = require('../../misc/users.json');
  const [editMode, setEditMode] = useState(false);
  const [fieldValue, setFieldValue] = useState(value);
  const dispatch = useDispatch();
  const { minLengthError } = useValidation(fieldValue, {
    isEmpty: false,
    minLength: minLength,
  });
  const isPatternError = usePatternError(passwordPattern, fieldValue);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    updateUserById(userId, field, fieldValue, users);
    updateField(dispatch, { field, value: fieldValue });
  };

  const handleChange = (e) => {
    setFieldValue(e.target.value);
  };

  return (
    <Form.Group>
      <FormControl
        value={fieldValue}
        onChange={handleChange}
        disabled={!editMode}
      />
      <Button
        disabled={
          fieldValue.length === 0 ||
          minLengthError ||
          (field === 'password' && isPatternError)
        }
        onClick={editMode ? handleSave : handleEdit}>
        {editMode ? `Save ${label}` : `Edit ${label}`}
      </Button>
    </Form.Group>
  );
};

export default EditFormField;
