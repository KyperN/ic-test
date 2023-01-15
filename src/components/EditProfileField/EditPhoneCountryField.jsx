import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
const EditPhoneCountryField = ({ country, phone }) => {
  const [error, setError] = useState(false);
  const handleChange = (phone, country) => {
    phone.length > 8 ? setError(false) : setError(true);
    // handlePhoneCountry(phone, country);
  };

  return (
    <>
      <p>your current phone number: {phone}</p>
      <p>country: {country}</p>
      <PhoneInput
        disabled={true}
        country={'us'}
        phone={phone}
        onChange={(phone, country) => handleChange(phone, country.name)}
      />
    </>
  );
};

export default EditPhoneCountryField;
