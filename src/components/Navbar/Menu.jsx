import React, { useState } from 'react';

//Intern
import Icon from '../Icon'
import Button from '../Button'
import { StyleBurger, ContainerMenu, ItemsMenu } from './style';

//Variables
import * as navbar from '../../variables/navbar';
import * as banner from '../../variables/banner'

const Menu = ({openModal}) => {

  const [open, setOpen] = useState(true)

  return (
    <>
      <ContainerMenu  open= {open} >
        <ItemsMenu onClick= {openModal}>
        <Button
          backgroundColor={navbar.btn.backgroundColor}
          textColor={navbar.btn.textColor}
          content={banner.cta.content}
          onClick={openModal}
        />
        </ItemsMenu> 
      </ContainerMenu>
      <StyleBurger open= {open} onClick={()=> setOpen(!open)}>
        <Icon icon={open ? navbar.burgerIcon.text :'times'} size="2x"/>
      </StyleBurger>
    </> 
  )
}

export default Menu
