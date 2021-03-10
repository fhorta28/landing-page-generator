import React from 'react'

//Intern
import Input from './Input'
import UseForm from "./UseForm";
import validate from "./validateForm";
import { FormContainer, FormBtn, ContainerBtn } from './style'

const Form = () => {

  const { handleChange, handleSubmit, values, errors } = UseForm(
    submit,
    validate
  )

  function submit() {
    console.log(values);
  }

  return (
    <>
      <FormContainer>
      <>
        <Input
          label="Prénom"
          type="text"
          value={values.firstName}
          onChange={handleChange}
        />
        { errors.firstname && <p> {errors.email} </p> }
      </>
        <Input
          label="Nom"
          type="text"
          value={values.lastName}
          onChange={handleChange}
        />
        <Input
          label="Téléphone"
          type="text"
          value={values.phoneNumber}
          onChange={handleChange}
        />
        <Input
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        <Input
          label="Nom entreprise"
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
