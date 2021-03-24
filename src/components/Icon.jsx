import React from 'react'

//Library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = (props) => {
  const {
    icon,
    onClick,
    size,
    style
  } = props

  return (
    <FontAwesomeIcon 
      icon={icon}
      onClick={onClick}
      size={size}
      style={style}
    />
  )
}

export default Icon
