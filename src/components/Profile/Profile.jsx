import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import EditProfileForm from '../EditProfileForm/EditProfileForm';
import { handleLogOut } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      <h1>Welcome {user.firstName}</h1>
      <EditProfileForm user={user} />
      <Button
        onClick={() => handleLogOut(dispatch)}
        style={{ marginTop: '3%' }}>
        Logout
      </Button>
    </div>
  );
};

export default Profile;
