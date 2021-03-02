import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { StyleBurger, ContainerBtn, NavBtn } from './style';



const Menu = () => {

    const [open, setOpen] = useState(false)
    return (
         <>
         <ContainerBtn open= { open }>
            <NavBtn >Demander une démo</NavBtn> 
         </ContainerBtn>
         <StyleBurger open= {open} onClick={()=> setOpen(!open)}>
             <FontAwesomeIcon icon={faBars} size="2x"/>
         </StyleBurger>
         </> 
    )
}

export default Menu
