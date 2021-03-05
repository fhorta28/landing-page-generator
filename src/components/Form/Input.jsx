import React, { useState }from 'react'

//Intern
import { InputContainer, InputText } from './style'

const Input = ({
    value,
    type,
    label,
    onChange,
    onFocus,
    onBlur,
    setRef,
    preference,
    ...props
  }) => {
    const [focused, setFocused] = useState(false)
    const [error, setError] = useState(null)
  
    const handleOnFocus = () => {
      setFocused(true)
      onFocus()
    }  
  
    const handleOnBlur = () => {
      setFocused(false)
      onBlur()
    }
  
    const validateValue = (val) => {
      if (type === "email") {
        // email validation
        if (val.indexOf("@") === -1) {
          setError("email invalide")
        } else {
          setError(null)
        }
      }
      // add validation conditions for phoneNumber & for submit form after
    }
  
    const handleOnChange = (val) => {
      validateValue(val)
      onChange(val)
    }
  
    const renderLabel = () => {
      if (label) {
        // if we have an error
        if (error) {
          return <label>{ error }</label>
        }
  
        return <label>{ label }</label>      
      }
      return null
    }

    const typeOfInput = () => {
      if (type ==="select") {
        return <InputText/>
      }
    }
  
    const isFocused = focused || String(value).length || type === "select"
  
    return (
      <InputContainer focused={isFocused} error={error}>
        { renderLabel() }
        <input 
          value={value}
          type={type}
          onChange={e => handleOnChange(e.target.value)}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          ref={ref => setRef(ref)}
          {...props}
        />
      </InputContainer>
    )
  }
  
  Input.defaultProps = {
    type: "",
    label: "",
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    setRef: () => {},
  }
  
  export default Input