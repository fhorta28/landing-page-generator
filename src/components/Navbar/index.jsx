import React from 'react'

//Intern
import Menu from './menu'
import { Nav,  ContainerBrand, Logo, Slogan } from './style'

// Variables
import * as navbar from '../../variables/navbar'
import LogoImg from '../../variables/assets/logo_img.svg'


 const Navbar = () => {
    
    
    return (
        
        <Nav>
        <ContainerBrand >
            <Logo src={LogoImg} alt="logo"/>
           <Slogan>{navbar.slogan.text}</Slogan>
        </ContainerBrand> 
        <Menu/>
        </Nav> 
    )
}



export default Navbar

