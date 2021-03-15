import React from 'react'

//Intern
import Input from './Input'
import UseForm from "./useForm";
import validate from "./validateForm";
import { FormContainer, FormBtn, ContainerBtn } from './style'

const Form = () => {

  const { handleChange, handleSubmit, values, error, isSubmitting } = UseForm(
    submit,
    validate
  );

  function submit() {
    // Test submit
    console.log(values);
  }
 
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
