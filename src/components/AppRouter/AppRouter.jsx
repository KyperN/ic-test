import React from 'react';
import { useSelector } from 'react-redux';
import ItemCards from '../ItemCards/ItemCards';
import { Route, Routes } from 'react-router';
import ItemInfo from '../ItemInfo/ItemInfo';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';
import PremiumSection from '../PremiumSection/PremiumSection';
const AppRouter = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
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
  ];

  return (
    <Routes>
      {paths.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />;
      })}
    </Routes>
  );
};

export default AppRouter;
