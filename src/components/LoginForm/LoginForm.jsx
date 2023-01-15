import React, { useEffect, useState } from 'react';
import EmailField from '../RegisterFormComponents/EmailField';
import PasswordField from '../RegisterFormComponents/PasswordField';
import { Button, Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleSuccessLogin } from '../../redux/actions';

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

  const validateCredentials = () => {
    const user = users.filter((user) => user.email === email);

    if (user.length === 0) {
      setError(true);
    } else {
      user[0].password === password
        ? handleSuccessLogin(dispatch, user[0])
        : setError(true);
    }
  };
  useEffect(() => {
    let timer;
    if (error) {
      timer = setTimeout(() => {
        setError(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [error]);

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
        <Button disabled={!email || !password} onClick={validateCredentials}>
          Login
        </Button>
      </Link>
      <Link to="/register">
        <p>Register</p>
      </Link>
    </Container>
  );
};

export default LoginForm;
