import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import EmailField from '../RegisterFormComponents/EmailField';
import PasswordField from '../RegisterFormComponents/PasswordField';
import CountryAndPhoneField from '../RegisterFormComponents/CountryAndPhoneField';
import FirstNameField from '../RegisterFormComponents/FirstNameField';
import LastNameField from '../RegisterFormComponents/LastNameField';
import DobField from '../RegisterFormComponents/DobField';
import 'react-phone-number-input/style.css';
import { setAllErrorsTrue } from '../../redux/actions';

const users = require('../../misc/users.json');

const RegistrationForm = () => {
  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    dob: '',
    phone: '',
    password: '',
    id: '',
    agreed: false,
  });
  const dispatch = useDispatch();
  const {
    emailError,
    lastNameError,
    firstNameError,
    passwordError,
    dobError,
    phoneError,
  } = useSelector((state) => state.formError);
  const navigate = useNavigate();

  const { firstName, lastName, email, dob, password, agreed } =
    registrationData;

  const handleUserInput = (e) => {
    setRegistrationData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }));
  };

  const handlePhoneCountry = (phone, country) => {
    setRegistrationData((prev) => ({
      ...prev,
      phone: phone,
      country: country,
    }));
  };

  const handleSubmit = () => {
    setRegistrationData((prev) => ({
      ...prev,
      id: Math.random().toString(),
    }));
    users.push(registrationData);
    setRegistrationData({
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      dob: '',
      phone: '',
      password: '',
      id: '',
      agreed: false,
    });
    navigate('/premium');
    setAllErrorsTrue(dispatch);
  };

  const isFormValid = useMemo(
    () =>
      !(
        emailError ||
        lastNameError ||
        firstNameError ||
        passwordError ||
        dobError ||
        phoneError ||
        !agreed
      ),
    [
      emailError,
      lastNameError,
      firstNameError,
      passwordError,
      dobError,
      phoneError,
      agreed,
    ]
  );

  return (
    <Form className="container">
      <FirstNameField firstName={firstName} handleUserInput={handleUserInput} />
      <LastNameField lastName={lastName} handleUserInput={handleUserInput} />
      <EmailField email={email} handleUserInput={handleUserInput} />
      <PasswordField password={password} handleUserInput={handleUserInput} />
      <CountryAndPhoneField handlePhoneCountry={handlePhoneCountry} />
      <DobField handleUserInput={handleUserInput} dob={dob} />
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onChange={(e) => {
            handleUserInput(e);
          }}
          type="checkbox"
          label="I accept terms"
          name="agreed"
        />
      </Form.Group>
      <Button
        disabled={!isFormValid}
        onClick={handleSubmit}
        variant="primary"
        type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default RegistrationForm;
