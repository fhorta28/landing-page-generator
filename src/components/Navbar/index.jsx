import React from 'react'
import styled from 'styled-components'
import { logo } from '../../variables/navbar'

import { Nav, NavBtn, ContainerLogo, ContainerBtn, Logo } from './style'
import LogoImg from '../../variables/assets/logo_img.svg'


 const Navbar = () => {

   
    return (
        
        <Nav >
        <ContainerLogo >
        <Logo src={LogoImg} alt="logo"/> 
        </ContainerLogo> 
        <ContainerBtn>
        <NavBtn>Demander une démo</NavBtn> 
        </ContainerBtn>
        
        </Nav> 
    )
}

export default Navbar

