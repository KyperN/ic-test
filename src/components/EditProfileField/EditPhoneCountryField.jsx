import React, { useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import FormError from '../RegisterFormComponents/FormError';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { updateUserById } from '../../misc/updateUserData';

const users = require('../../misc/users.json');

const EditPhoneCountryField = ({ initialCountry, initialPhone, userId }) => {
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    phone: initialPhone,
    country: initialCountry,
  });
  const { phone, country } = formData;

  const handleChange = (phone, country) => {
    setError(phone.length <= 8);
    setFormData({ phone: phone, country: country });
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    updateUserById(userId, 'phone', phone, users);
    updateUserById(userId, 'country', country, users);
    dispatch({
      type: 'UPDATE_FIELD',
      payload: { field: 'phone', value: phone },
    });
    dispatch({
      type: 'UPDATE_FIELD',
      payload: { field: 'country', value: country },
    });
  };

  return (
    <>
      <FormControl value={initialPhone} disabled={true} />
      <FormControl value={initialCountry} disabled={true} />
      <Button disabled={error} onClick={editMode ? handleSave : handleEdit}>
        {editMode ? `Save Phone & Country` : `Edit Phone & Country`}
      </Button>
      <div style={{ marginLeft: '40%' }}>
        <PhoneInput
          disabled={!editMode}
          country={'us'}
          phone={phone}
          onChange={(phone, country) => handleChange(phone, country.name)}
        />
      </div>
      {error && <FormError text={'Invalid phone'} />}
    </>
  );
};

export default EditPhoneCountryField;
