// Base
import React from 'react'
import PropTypes from 'prop-types'
// Intern
import { Container } from './style' 




const Button = props => {
  // Props & States
  const { backgroundColor, textColor, content, onClick } = props
  
  return (
    
      <Container backgroundColor={backgroundColor} textColor={textColor} onClick={onClick}>
        {content}
      </Container>
      
  )
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
