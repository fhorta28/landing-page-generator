import React, { useState } from 'react';

//Intern
import { StyleBurger, ContainerBtn, NavBtn } from './style';

//Variables
import * as FontAwesomeIcon from '../../services/FontAwesomeIco';
import * as navbar from '../../variables/navbar';

const Menu = () => {

    const [open, setOpen] = useState(false)
    return (
         <>
         <ContainerBtn open= { open }>
            <NavBtn >Demander une démo</NavBtn> 
         </ContainerBtn>
         <StyleBurger open= {open} onClick={()=> setOpen(!open)}>
           <FontAwesomeIcon icon={navbar.burgerIcon.text} size="2x"/>
         </StyleBurger>
         </> 
    )
}


export default Menu
