import React, { useState }from 'react'

//Intern
import Input from './Input'
import { FormContainer, InputText, InputSelect } from './style'


const Form =  ()  => {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        contactPreference: '',
      })


    return (
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
            label="Entreprise"
            type="text"
            value={values.companyName}
            onChange={val => setValues({ ...values, companyName: val })}
          />
          <Input
            label="Je préfère"
            type="select"
            onChange={val => setValues({ ...values, contactPreference: val })}         
          />
        </FormContainer>
    )
}

export default Form
