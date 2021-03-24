import React, { useState, useEffect } from 'react'

//Intern
import Input from './Input'
import { FormContainer, FormBtn, ContainerBtn } from './style'

const Form = (callback) => {

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    contactPreference: '', 
  })
  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values,[name]: value });
    setError(validateInfo(values));
  }

  const validateInfo = (value) => {
    let error = {};
    if (!value.firstName ) {
      error.firstName = 'Prénom obligatoire';
    }
    if (!value.lastName) {
      error.lastName = 'Nom obligatoire';
    }
    if (!value.companyName) {
      error.companyName = 'Nom entreprise obligatoire';
    }
    if (!value.phoneNumber) {
      error.phoneNumber = 'Téléphone obligatoire';
    }
    if (!value.email) {
      error.email = 'Email obligatoire';
    } else if (!/\S+@\S+\.\S+/.test(value.email)) {
      error.email = 'Email invalide!';
    }
    return error;
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    setError(validateInfo(values));
    setIsSubmitting(true);
  }

  useEffect(
    () => {
      if (Object.keys(error).length === 0 && isSubmitting ) {
        callback();
      }
    },
    []
  );
 
  return (
    <>
      <FormContainer>
        <Input
          error={isSubmitting && error.firstName}
          label="Prénom"
          name="firstName"
          type="text"
          value={values.firstName}
          onChange={handleChange}
        >
        </Input>  
        <Input
          error={isSubmitting && error.lastName}
          label="Nom"
          name="lastName"
          type="text"
          value={values.lastName}
          onChange={handleChange}
        />
        <Input
          error={isSubmitting && error.phoneNumber}
          label="Téléphone"
          name="phoneNumber"
          type="text"
          value={values.phoneNumber}
          onChange={handleChange}
        />
        <Input
          error={isSubmitting && error.email}
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        <Input
          error={isSubmitting && error.companyName}
          label="Nom entreprise"
          name="companyName"
          type="text"
          value={values.companyName}
          onChange={handleChange}
        />
        <Input
          label="Contact"
          type="select"
          value={values.contactPreference}
          onChange={handleChange}
        />
      </FormContainer>
      <ContainerBtn><FormBtn type="submit" onClick={handleSubmit} noValidate>Envoyé</FormBtn></ContainerBtn>
    </>
  )
}

export default Form
