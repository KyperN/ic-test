import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import 'react-phone-number-input/style.css';
import EmailField from '../RegisterFormComponents/EmailField';
import PasswordField from '../RegisterFormComponents/PasswordField';
import CountryAndPhoneField from '../RegisterFormComponents/CountryAndPhoneField';
import DobField from '../RegisterFormComponents/DobField';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import FirstNameField from '../RegisterFormComponents/FirstNameField';
import LastNameField from '../RegisterFormComponents/LastNameField';
const Registration = () => {
  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    dob: '',
    phone: '',
    password: '',
    agreed: false,
  });
  const {
    emailError,
    lastNameError,
    firstNameError,
    passwordError,
    dobError,
    phoneError,
  } = useSelector((state) => state.formError);
  const navigate = useNavigate();
  const { firstName, lastName, email, dob, phone, password, agreed } =
    registrationData;
  const users = require('../../misc/users.json');

  const handleInput = (e) => {
    setRegistrationData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleUserInput = (e) => {
    setRegistrationData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleUserAgreement = (e) => {
    setRegistrationData((prev) => ({
      ...prev,
      agreed: e.target.checked,
    }));
  };
  const handlePhoneCountry = (phone, country) => {
    setRegistrationData((prev) => ({
      ...prev,
      phone: phone,
      country: country,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    users.push(registrationData);
    setRegistrationData({
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      dob: '',
      phone: '',
      password: '',
      agreed: false,
    });
    navigate('/premium');
  };

  return (
    <Container>
      <Alert style={{ display: 'none' }} variant="success">
        This is a alert—check it out!
      </Alert>
      <Form className="w-25">
        <FirstNameField
          firstName={firstName}
          handleUserInput={handleUserInput}
        />
        <LastNameField lastName={lastName} handleUserInput={handleUserInput} />
        <EmailField
          email={email}
          handleInput={handleInput}
          handleUserInput={handleUserInput}
        />
        <PasswordField password={password} handleUserInput={handleUserInput} />
        <CountryAndPhoneField handlePhoneCountry={handlePhoneCountry} />
        <DobField handleUserInput={handleUserInput} dob={dob} />
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onChange={(e) => {
              handleUserAgreement(e);
            }}
            type="checkbox"
            label="I accept terms"
          />
        </Form.Group>
        <Button
          disabled={
            emailError ||
            firstNameError ||
            lastNameError ||
            passwordError ||
            dobError ||
            phoneError
          }
          onClick={handleSubmit}
          variant="primary"
          type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Registration;
