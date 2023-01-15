import React from 'react';
import { useMemo } from 'react';
import EditDobField from '../EditProfileField/EditDobField';
import EditPhoneCountryField from '../EditProfileField/EditPhoneCountryField';
import EditProfileField from '../EditProfileField/EditProfileField';

const EditProfileForm = ({ user }) => {
  const { firstName, lastName, password, id, dob, country, phone } = user;

  const editFields = useMemo(
    () => [
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
      {
        field: 'dob',
        value: dob,
        userId: id,
        minLength: 8,
        label: 'DOB',
      },
    ],
    [firstName, lastName, password, id, dob]
  );

  const fields = editFields.map(
    ({ field, label, value, userId, minLength }) => {
      return (
        <EditProfileField
          field={field}
          label={label}
          value={value}
          userId={userId}
          minLength={minLength}
          key={field}
        />
      );
    }
  );

  return (
    <>
      {fields}
      <EditPhoneCountryField
        userId={id}
        initialPhone={phone}
        initialCountry={country}
      />
      <EditDobField initialDob={dob} userId={id} />
    </>
  );
};

export default EditProfileForm;
