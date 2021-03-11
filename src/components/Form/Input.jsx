import React, { useState }from 'react'

//Intern
import { InputContainer, InputText, InputSelect, ErrorMessage } from './style'

const Input = ({
    error,
    value,
    type,
    label,
    onChange,
    onFocus,
    onBlur,
    preference,
    ...props
  }) => {

  const [focused, setFocused] = useState(false)
  // const [error, setError] = useState(false)
    
  const handleOnFocus = () => {
    setFocused(true)
    onFocus()
  }  
  
  const handleOnBlur = () => {
    setFocused(false)
    onBlur()
  }
  

  
  // const handleOnChange = (val) => {
  //   validateValue(val)
  //   onChange(val)
  // }

  const renderLabel = () => {
    if (label) {
     // if we have an error
       if (error) {
        return <label>{ error }</label>
      }
      return <label>{ label }</label>      
    }
  } 
  
  const isFocused = focused || String(value).length || type === "select"
  
  const inputType = () => {
    if(type === "select"){
      return (
        <InputSelect
          type={type}
          preference={['call', 'video']}
          onChange={onChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          {...props}       
        > 
          <option value={preference}>Être rappelé.e</option>
          <option value={preference}>Recevoir une vidéo de présentation</option>
        </InputSelect>
      )  
    }else if(type != "select"){
      return (
        <InputText
          error={error}
          value={value}
          type={type}
          onChange={onChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          {...props} 
        />
      )      
    }
  }

  return (
    <InputContainer focused={isFocused} onchange={onChange} error={error}>
      { renderLabel() }       
      { inputType() }
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
