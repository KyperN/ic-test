import React from 'react';
import { Form } from 'react-bootstrap';

const FormError = ({ text, hasError }) => {
  return <Form.Text style={{ color: 'red' }}>{text}</Form.Text>;
};

export default FormError;
