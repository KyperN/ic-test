import React from 'react';
import ItemCards from '../ItemCards/ItemCards';
import { Route, Routes } from 'react-router';
import ItemInfo from '../ItemInfo/ItemInfo';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';
import PremiumSection from '../PremiumSection/PremiumSection';
import Profile from '../Profile/Profile';
const AppRouter = ({ isAuth, user }) => {
  const paths = [
    {
      path: '/home',
      element: <ItemCards />,
    },
    { path: 'product/:id', element: <ItemInfo /> },
    { path: '/register', element: <RegistrationForm /> },
    {
      path: 'premium',
      element: isAuth ? <PremiumSection /> : <LoginForm />,
    },
    {
      path: '/login',
      element: <LoginForm />,
    },
    {
      path: '/profile',
      element: isAuth ? <Profile user={user} /> : <LoginForm />,
    },
  ];
  const routes = paths.map(({ path, element }) => {
    return <Route key={path} path={path} element={element} />;
  });
  return <Routes>{routes}</Routes>;
};

export default AppRouter;
