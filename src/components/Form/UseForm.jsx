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
    setError(validate(values));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(error).length === 0 && isSubmitting ) {
        callback();
      }
    },
    [error]
  );

  return { handleChange, handleSubmit, values, error };
};

export default useForm;