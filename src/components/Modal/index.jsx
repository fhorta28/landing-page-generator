import React, { useEffect } from 'react';

//Library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Intern
import Form from '../Form'
import { ModalWrapper, StyleModal, HeaderModal, BtnClose, TitleModal, ContainerForm } from './style';

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
        <HeaderModal>
          <TitleModal>{modalForm.bannerModal.text}</TitleModal>
          <BtnClose onClick={closeModal}>
            <FontAwesomeIcon icon={modalForm.modalCloseIcon.text}/>
          </BtnClose>
        </HeaderModal>
        <ContainerForm>
          <Form/>
        </ContainerForm>  
      </StyleModal>
    </ModalWrapper>  
  )
}

export default Modal
