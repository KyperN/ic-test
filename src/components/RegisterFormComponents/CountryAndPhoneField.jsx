import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPhoneError } from '../../redux/actions';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import FormError from './FormError';

const CountryAndPhoneField = ({ handlePhoneCountry }) => {
  const [error, setError] = useState(true);
  const dispatch = useDispatch();
  const handleChange = (phone, country) => {
    setError(phone.length <= 8);
    handlePhoneCountry(phone, country);
  };
  useEffect(() => {
    if (!error) {
      setPhoneError(dispatch, false);
    } else {
      setPhoneError(dispatch, true);
    }
  }, [error, dispatch]);
  return (
    <>
      <PhoneInput
        country={'us'}
        onChange={(phone, country) => handleChange(phone, country.name)}
      />
      {error && <FormError text={'Invalid phone'} />}
    </>
  );
};

export default CountryAndPhoneField;
