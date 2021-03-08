import React, { useState }from 'react'
import PropTypes from 'prop-types'

//Intern
import Input from './Input'

import { FormContainer, FormBtn, ContainerBtn } from './style'

//Variables


const Form =  (onValid)  => {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        contactPreference: 'call',
      })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = () => {
      onValid((values))
      setIsSubmitted(true)
      
      return console.log('envoyé')
      }
    

    return (
      <>
        <FormContainer>
          <Input
            onValide={onValid}
            label="Prénom"
            type="text"
            value={values.firstName}
            onChange={val => setValues({ ...values, firstName: val })}
          />
          <Input
            label="Nom"
            type="text"
            value={values.lastName}
            onChange={val => setValues({ ...values, lastName: val })}
          />
          <Input
            label="Téléphone"
            type="text"
            value={values.phoneNumber}
            onChange={val => setValues({ ...values, phoneNumber: val })}
          />
          <Input
            label="Email"
            type="email"
            value={values.email}
            onChange={val => setValues({ ...values, email: val })}
          />
          <Input
            label="Nom entreprise"
            type="text"
            value={values.companyName}
            onChange={val => setValues({ ...values, companyName: val })}
          />
           <Input
            label="Contact"
            type="select"
            value={values.contactPreference}
            onChange={val => setValues({ ...values, contactPreference: val })}
           />
        </FormContainer>
        <ContainerBtn><FormBtn type="submit" onClick={handleSubmit} >Envoyé</FormBtn></ContainerBtn>
      </>
    )
}

export default Form
