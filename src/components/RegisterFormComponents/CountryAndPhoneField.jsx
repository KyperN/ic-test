import React, { useState } from 'react';
import { useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import FormError from './FormError';
import { useDispatch } from 'react-redux';
const CountryAndPhoneField = ({ handlePhoneCountry }) => {
  const [error, setError] = useState(true);
  const dispatch = useDispatch();
  const handleChange = (phone, country) => {
    phone.length > 8 ? setError(false) : setError(true);
    handlePhoneCountry(phone, country);
  };
  useEffect(() => {
    if (!error) {
      dispatch({
        type: 'PHONE_ERROR',
        payload: false,
      });
    } else {
      dispatch({
        type: 'PHONE_ERROR',
        payload: true,
      });
    }
  }, [error, dispatch]);
  return (
    <>
      <PhoneInput
        country={'us'}
        onChange={(phone, country) => handleChange(phone, country.name)}
      />
      {error ? <FormError text={'Invalid phone'} /> : null}
    </>
  );
};

export default CountryAndPhoneField;
