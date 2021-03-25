import styled from 'styled-components'
import * as modalForm from '../../variables/modalForm'
import * as navbar from '../../variables/navbar'

export const FormContainer = styled.div`
  padding: 10px;
  height: 250px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  
  @media (max-width: 1024px) {
    margin-top: 10px;
  }  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
  @media (max-width: 560px) {
    height: 400px;
  }
`
export const InputContainer = styled.div`
  display:flex;
  align-items: center;
  flex-direction: column; 
  background-color:transparent;
  border-radius: 5px;
  padding-top: 20px;
  position: relative;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    justify-content:center;
    padding-top: 10px; 
  }
  @media (max-width: 560px) {
    padding-top: 5px;
  }

  & > label {
    font-size: 18px;
    color: ${modalForm.form.textColor};
    position: absolute;
    top: 30px;
    left: 45px;
    transition: all 0.2s ease;
    z-index: 500;

    @media (max-width: 1024px) {
      top: 30px;
      left: 40px;
    } 
    @media (max-width: 768px) {
      top: 35px;
      left: 50px;
      font-size: 16px;
    }
    @media (max-width: 568px) {
      top: 25px;
      left: 40px;
    }

    ${props => props.focused && `
      color: ${modalForm.form.textLabelColor};
      border-radius: 3px;
      font-size: 12px;
      transform: translateY(-25px) translateX(-7px);
      z-index: 999;
      background: ${modalForm.modal.backgroundColor};
      padding: 2px 5px;      

      // Small devices ( mobiles phones, 768px and down)
      @media (max-width: 768px) { font-size: 10px; transform: translateY(-19px) translateX(-7px);}
      // Medium devices (tablets, 768px and up)
      @media (min-width: 768px) { transform: translateY(-20px) translateX(-7px);
      font-size: 11px; }
      // Large devices (desktops, 992px and up)
      @media (min-width: 992px) { transform: translateY(-21px) translateX(-7px); font-size: 12px;}

    `}

    ${props => props.error && `
      color: red !important;
      font-size: 13px;
      font-weight:600;

      // Xsmall devices (smartphones phones, 576px and down)
      @media (max-width: 567px) { top: 30px; left: 40px; font-size: 10px;}
      // Small devices (landscape phones, (568px and up)
      @media (min-width: 568px) { top: 30px; left: 45px; font-size: 10px;}
      // Medium devices (tablets, 768px and up)
      @media (min-width: 768px) { top: 40px; left: 40px; font-size: 11px; }
      // Large devices (desktops, 992px and up)
      @media (min-width: 992px) { top: 33px; left: 40px; font-size: 13px; }
    `} 
  }
`

export const InputText = styled.input`
  width:80%;
  border: ${props => props.error ? '1px solid #e77674 !important': '1px solid #eee'};
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  outline: none;
  padding: 12px 5px;
  font-size: 15px;
  transition: all 0.2s ease;
  z-index: 500;
  cursor: pointer;

  @media (max-width: 1024px) {
    padding: 10px 5px;
  } 
  @media (max-width: 768px) {
    padding: 8px 2px;
  }
`
export const InputSelect = styled.select`
  width:80%;
  border: 1px solid #eee ;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  outline: none;
  padding: 12px 5px;
  box-sizing: border-box;
  font-size: 15px;
  transition: all 0.2s ease;
  z-index: 500;
  cursor: pointer;

  @media (max-width: 1024px) {
    padding: 10px 5px;
  } 
  @media (max-width: 768px) {
    padding: 8px 2px; 
  }
`

export const ContainerBtn = styled.div`
  width : 95%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const FormBtn = styled.button`
  background-color: ${navbar.btn.backgroundColor};
  border: none;
  border-radius: 30px;
  color: ${navbar.btn.textColor};
  cursor: pointer;
  font-size: 15px;
  padding: 12px 30px;
  &:focus { outline: none };
  &:hover { opacity: 0.9 };

  @media (max-width: 1024px) {
    padding: 12px 30px;
  } 
  @media (max-width: 786px) {
    padding: 12px 30px;
    margin: 0px;
  } 
`
