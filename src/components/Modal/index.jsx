import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//Intern
import { ModalWrapper, StyleModal, BtnClose } from './style';

//Variables
import * as modalForm from '../../variables/modalForm'


const index = () => {
    return (
        
        <ModalWrapper>
            <StyleModal>
                <p>modal react</p>
                <BtnClose >
                    <FontAwesomeIcon icon={modalForm.modalCloseIcon.text} size="2x"></FontAwesomeIcon>
                </BtnClose>
            </StyleModal>
        </ModalWrapper>
        
    )
}

export default index 


    
    
        
 
