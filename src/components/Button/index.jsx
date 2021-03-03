// Base
import React from 'react'
import PropTypes from 'prop-types'
// Intern
import { Container } from './style' 
import ModaleFunction from '../Modale/ModaleFunction'
import Modale from '../Modale/index'


const Button = props => {
  // Props & States
  const { backgroundColor, textColor, content, onClick } = props
  const {openModale, toggleModale} = ModaleFunction();

  return (
    <>
      <Container backgroundColor={backgroundColor} textColor={textColor} onClick={toggleModale}>
        {content}
      </Container>
      <Modale></Modale>
    </>
  )
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
