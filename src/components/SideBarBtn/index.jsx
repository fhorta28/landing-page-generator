import React from 'react'

//Intern
import Icon from '../Icon'
import { Btn, SideBarLogo } from './style'

const SideBarBtn = ( {onClick} ) => {
    
    return (   
    <Btn>
    <SideBarLogo>
    <Icon onClick= {onClick} icon= 'angle-double-right' size="3x"/>
    </SideBarLogo>
    </Btn>
    )
}

export default SideBarBtn
