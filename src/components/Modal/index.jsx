import React, { useEffect } from 'react';

//Library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Intern
import { ModalWrapper, StyleModal, BannerModal, BtnClose } from './style';

//Variables
import * as modalForm from '../../variables/modalForm'


const Modal = ({closeModal}) => {
    
    let modalRef;

    const hideModal = (e) => {
      if (modalRef && !modalRef.contains(e.target)) {
         closeModal();
      }
    }
  
    useEffect(() => {
      document.addEventListener('click', hideModal)
      return () => {
        document.removeEventListener('click', hideModal);
      }
    },[]);
    
    return (  
        <ModalWrapper>
            <StyleModal ref={(node) => modalRef = node}>
                <BannerModal>
                    <h2>{modalForm.bannerModal.text}</h2>
                    <BtnClose onClick={closeModal}>
                        <FontAwesomeIcon icon={modalForm.modalCloseIcon.text}></FontAwesomeIcon>
                    </BtnClose>
                </BannerModal>
            </StyleModal>
        </ModalWrapper>  
    )
}

export default Modal


    
    
        
 
