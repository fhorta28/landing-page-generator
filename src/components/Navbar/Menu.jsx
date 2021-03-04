import React, { useState } from 'react';

//Library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Intern
import { StyleBurger, ContainerBtn, NavBtn } from './style';

//Variables
import * as navbar from '../../variables/navbar';

const Menu = ({openModal}) => {

    const [open, setOpen] = useState(false)

    return (
         <>
            <ContainerBtn  open= { open } >
              <NavBtn onClick= {openModal}>{navbar.btn.content}</NavBtn> 
            </ContainerBtn>
            <StyleBurger open= {open} onClick={()=> setOpen(!open)}>
              <FontAwesomeIcon icon={navbar.burgerIcon.text} size="2x"/>
            </StyleBurger>
         </> 
    )
}



export default Menu
