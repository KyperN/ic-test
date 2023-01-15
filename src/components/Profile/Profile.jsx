import React from 'react';
import { useSelector } from 'react-redux';
import EditProfileForm from '../EditProfileForm/EditProfileForm';
import { handleLogOut } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
const Profile = () => {
  const dispatch = useDispatch();
  const { user, isAuth } = useSelector((state) => state.user);
  console.log(isAuth);
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
