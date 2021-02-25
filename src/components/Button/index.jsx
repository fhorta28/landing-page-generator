// Base
import React from 'react'
import PropTypes from 'prop-types'
// Intern
import { Container } from './style' 


const Button = props => {
  // Props & States
  const { content, onClick } = props

  return (
    <Container onClick={onClick}>
      {content}
    </Container>
  )
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
