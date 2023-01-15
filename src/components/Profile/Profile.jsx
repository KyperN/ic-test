import React from 'react';
import { useSelector } from 'react-redux';
import EditProfileForm from '../EditProfileForm/EditProfileForm';

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      <h1>Welcome {user.firstName}</h1>
      <EditProfileForm user={user} />
    </div>
  );
};

export default Profile;
