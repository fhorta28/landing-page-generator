// Base
import React from 'react'
import PropTypes from 'prop-types'
// Intern
import { Container } from './style' 


const Button = props => {
  // Props & States
  const { className, content, onClick, style } = props
  
  return (
      <Container className={className} onClick= {onClick} style={style}>
        {content}
      </Container>   
  )
}

Button.propTypes = {
  style: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
