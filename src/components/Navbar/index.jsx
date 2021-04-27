import React from 'react'
import { Link } from "react-router-dom"

//Intern
import Menu from './Menu'
import { Nav,  ContainerBrand, Logo, Slogan } from './style'

// Variables
import * as navbar from '../../variables/navbar'
import LogoImg from '../../variables/assets/logo_img.svg'

const Navbar = ({openModal}) => {
      
  return (
    <Nav className="navBar">
      <ContainerBrand >
        <Link to="/">
          <Logo src={LogoImg} alt="logo"/>
        </Link>
        <Slogan>{navbar.slogan.text}</Slogan>
      </ContainerBrand> 
      <Menu openModal={openModal}/>
    </Nav> 
  )
}

export default Navbar
