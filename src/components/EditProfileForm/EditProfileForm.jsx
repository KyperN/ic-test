import React from 'react';
import EditPhoneCountryField from '../EditProfileField/EditPhoneCountryField';
import EditProfileField from '../EditProfileField/EditProfileField';
import CountryAndPhoneField from '../RegisterFormComponents/CountryAndPhoneField';
const EditProfileForm = ({ user }) => {
  const { firstName, lastName, password, id, dob, country, phone } = user;

  const editFields = [
    {
      field: 'firstName',
      value: firstName,
      userId: id,
      minLength: 1,
      label: 'First Name',
    },
    {
      field: 'lastName',
      value: lastName,
      userId: id,
      minLength: 1,
      label: 'Last Name',
    },
    {
      field: 'password',
      value: password,
      userId: id,
      minLength: 8,
      label: 'Password',
    },
    // {
    //   field: 'phone',
    //   value: phone,
    //   userId: id,
    //   minLength: 8,
    //   label: 'Phone',
    // },
    {
      field: 'dob',
      value: dob,
      userId: id,
      minLength: 8,
      label: 'DOB',
    },
    // {
    //   field: 'country',
    //   value: country,
    //   userId: id,
    //   minLength: 1,
    //   label: 'Country',
    // },
  ];

  const fields = editFields.map(
    ({ field, label, value, userId, minLength }) => {
      return (
        <EditProfileField
          field={field}
          label={label}
          value={value}
          userId={userId}
          minLength={minLength}
        />
      );
    }
  );

  return (
    <div>
      {fields}
      <EditPhoneCountryField phone={phone} country={country} />
    </div>
  );
};

export default EditProfileForm;
