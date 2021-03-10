import React, { useState }from 'react'

//Intern
import { InputContainer, InputText, InputSelect } from './style'

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
  // const [error, setError] = useState(false)
    
  const handleOnFocus = () => {
    setFocused(true)
    onFocus()
  }  
  
  const handleOnBlur = () => {
    setFocused(false)
    onBlur()
  }
  
  // const validateValue = (val) => {
  //   if ( value === ''){
  //     setError("Champs Obligatoire")
  //   }
  //   else {
  //     setError(null)
  //   }
  //   if (type === "email") {
  //     if (val.indexOf("@") === -1) {
  //       setError("email is invalid")
  //     }else {
  //       setError(null)
  //     }
  //   }
  // }
  
  // const handleOnChange = (val) => {
  //   validateValue(val)
  //   onChange(val)
  // }

  const renderLabel = () => {
    if (label) {
      // // if we have an error
      // if (error) {
      //   return <label>{ error }</label>
      // }
      return <label>{ label }</label>      
    }
    return null
  } 
  
  const isFocused = focused || String(value).length || type === "select"
  
  const inputType = () => {
    if(type === "select"){
      return (
        <InputSelect
          type={type}
          preference={['call', 'video']}
          // onChange={e => handleOnChange(e.target.value)}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          ref={ref => setRef(ref)}
          {...props}       
        > 
          <option value={preference}>Être rappelé.e</option>
          <option value={preference}>Recevoir une vidéo de présentation</option>
        </InputSelect>
      )  
    }else if(type != "select"){
      return (
        <InputText
          // error={error}
          value={value}
          type={type}
          // onChange={e => handleOnChange(e.target.value)}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          ref={ref => setRef(ref)}
          {...props} 
        />
      )      
    }
  }

  return (
    <InputContainer focused={isFocused}>
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
