import React, { useState }from 'react'

//Intern
import Input from './Input'

import { FormContainer, FormBtn, ContainerBtn } from './style'

//Variables


const Form =  ()  => {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        contactPreference: 'call',
      })


    return (
      <>
        <FormContainer>
          <Input
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
        <ContainerBtn><FormBtn>Envoyé</FormBtn></ContainerBtn>
      </>
    )
}

export default Form
