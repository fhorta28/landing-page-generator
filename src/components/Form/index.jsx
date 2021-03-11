import React from 'react'

//Intern
import Input from './Input'
import UseForm from "./UseForm";
import validate from "./validateForm";
import { FormContainer, FormBtn, ContainerBtn, ErrorMessage } from './style'

const Form = () => {

  const { handleChange, handleSubmit, values, error } = UseForm(
    submit,
    validate
  )

  function submit() {
    console.log(values);
  }

  return (
    <>
      <FormContainer>
        <Input
          error={error.firstName}
          label="Prénom"
          name="firstName"
          type="text"
          value={values.firstName}
          onChange={handleChange}
        >
        </Input>  
        <Input
          error={error.lastName}
          label="Nom"
          name="lastName"
          type="text"
          value={values.lastName}
          onChange={handleChange}
        />
        <Input
          error={error.phoneNumber}
          label="Téléphone"
          name="phoneNumber"
          type="text"
          value={values.phoneNumber}
          onChange={handleChange}
        />
        <Input
          error={error.email}
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        <Input
          error={error.companyName}
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
      <ContainerBtn><FormBtn type="submit" onClick={handleSubmit} >Envoyé</FormBtn></ContainerBtn>
    </>
  )
}

export default Form
