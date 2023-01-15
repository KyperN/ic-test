import React from 'react';
import { Container } from 'react-bootstrap';
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
import { setAllErrorsTrue } from '../../redux/actions';
import { useDispatch } from 'react-redux';
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
  const users = require('../../misc/users.json');
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

  const handleSubmit = (e) => {
    e.preventDefault();
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

  return (
    <Container>
      <Form className="w-25">
        <FirstNameField
          firstName={firstName}
          handleUserInput={handleUserInput}
        />
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
          disabled={
            emailError ||
            firstNameError ||
            lastNameError ||
            passwordError ||
            dobError ||
            phoneError ||
            !agreed
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

export default RegistrationForm;
