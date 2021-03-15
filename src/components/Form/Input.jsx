import React, { useState }from 'react'

//Intern
import { InputContainer, InputText, InputSelect } from './style'

const Input = ({
  error,
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
   
  const handleFocus = () => {
    setFocused(true)
    onFocus()
  }  
  
  const handleBlur = () => {
    setFocused(false)
    onBlur()
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
  
  const isFocused = focused || String(value).length || type === "select"
    // Input type 
  const inputType = () => {
    if(type === "select"){
      return (
        <InputSelect
          type={type}
          preference={['call', 'video']}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref => setRef(ref)}
          {...props}       
        > 
          <option value={preference}>Être rappelé.e</option>
          <option value={preference}>Recevoir une vidéo de présentation</option>
        </InputSelect>
      )  
    }else {
      return (
        <InputText
          error={error}
          value={value}
          type={type}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props} 
        />
      )      
    }
  }

  return (
    <InputContainer focused={isFocused} error={error}>
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
