import React from 'react'
import PropTypes from 'prop-types'

//Intern
import Menu from './menu'
import { Nav,  ContainerBrand, Logo, Slogan } from './style'

// Variables
import * as navbar from '../../variables/navbar'
import LogoImg from '../../variables/assets/logo_img.svg'


 const Navbar = props => {
    
    const { slogan } = props
    return (
        
        <Nav>
        <ContainerBrand >
            <Logo src={LogoImg} alt="logo"/>
            { slogan && <Slogan>{slogan}</Slogan>}
        </ContainerBrand> 
        <Menu/>
        </Nav> 
    )
}


Navbar.propTypes = {
    slogan: PropTypes.string,
}
export default Navbar

