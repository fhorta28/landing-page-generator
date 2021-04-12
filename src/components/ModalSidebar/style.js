import styled from "styled-components";


export const Modal = styled.div`
  position: fixed;
  top: 0px;
  margin : 0px; 
  z-index: 5;
  display:flex;
  justify-content: center;
  left : ${({ show })=> ( show ? '0' : '-100')};
  transition: 350ms; 
  width:40%; 
  height:100%;
  overflow:auto;
  background-color: white;
  
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 767px) {
    width:100%;
    font-size: 14px;
  }
`;

export const ModalContent = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:center;
  z-index: 6;
  background-color: rgb(255, 255, 255);
  padding: 0;
  width:100%;
  height:100%;
`;

export const ModalHeader = styled.div`
    display:flex;
    width:100%;
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.secondary.colorText};
`;
export const Title = styled.h2`
    display: flex;
    justify-content: center;
    padding-left: 20px;
    width: 90%;
`;
 export const IconClose = styled.div`
    display:flex;
    justify-content: center;
    padding: 8px;
    width: 10%;
`;

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;   
    
`;