import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  
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
    const val = isValide(name,value);
    setError({...values,[name]: val })
    console.log(error) 
  }

  const isValide = (name, value) => {
    if( value === ''){
    return translateForm(name)
    }
    return null
  }

  const translateForm = (name) => {
    if(name === "firstName"){
      return 'Prénom obligatoire';
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    setError(validate(values));
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

  return { handleChange, handleSubmit, values, error };
};

export default useForm;