import React, { useState } from 'react';
import EmailField from '../RegisterFormComponents/EmailField';
import PasswordField from '../RegisterFormComponents/PasswordField';
import { Button, Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link, redirect } from 'react-router-dom';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const { email, password } = credentials;
  const users = require('../../misc/users.json');

  const handleLoginInput = (e, type) => {
    if (type === 'email') {
      setCredentials((prev) => ({
        ...prev,
        email: e.target.value,
      }));
      return;
    }
    setCredentials((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };
  const displayError = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 1000);
  };
  const handleSuccessLogin = (user) => {
    dispatch({
      type: 'LOGIN',
      payload: user,
    });
  };
  const validateCredentials = () => {
    console.log(email);
    const user = users.filter((user) => user.email === email);
    console.log(user);
    if (user.length === 0) {
      displayError();
    } else {
      user[0].password === password ? handleSuccessLogin(user) : displayError();
    }
  };

  return (
    <Container className="d-flex flex-column">
      {error ? <Alert variant="danger">Wrong credentials</Alert> : null}
      <EmailField
        email={email}
        isForLogin={true}
        handleLoginEmail={handleLoginInput}
      />
      <PasswordField
        password={password}
        isForLogin={true}
        handleLoginPassword={handleLoginInput}
      />
      <Link to="/premium">
        <Button onClick={validateCredentials}>Login</Button>
      </Link>

      <p>
        Not a member? <a href="/register">Register</a>
      </p>
    </Container>
  );
};

export default LoginForm;
