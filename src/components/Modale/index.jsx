import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//Intern
import { ContainerModale, WrapperModale, StyleModale, BtnClose } from './style';

//Variables
import * as modalForm from '../../variables/modalForm'

const Modale = () => {

    const [openModale, setOpenModale] = useState(false)
    return (
        <>
            <ContainerModale className='overlay'></ContainerModale>
            <WrapperModale>
                <StyleModale>
                    <BtnClose openModale = {openModale} onClick={()=> setOpenModale(!openModale)}>
                        <FontAwesomeIcon icon={modalForm.modaleCloseIcon.text} size="2x"></FontAwesomeIcon>
                    </BtnClose>
                </StyleModale>
            </WrapperModale>
        </>
    )   
}


export default Modale