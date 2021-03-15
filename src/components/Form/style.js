import styled from 'styled-components'
import * as modalForm from '../../variables/modalForm'
import * as navbar from '../../variables/navbar'

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px 5px;
  margin-top: 20px;
  margin-bottom: 5px;
  z-index: -1;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 0;
    grid-gap: 0;
  }
`

export const InputContainer = styled.div`
  display:flex;
  flex-direction: column;
  overflow: hidden;
  background-color:transparent;
  border-radius: 5px;
  margin: 5px 5px;
  position: relative;
  transition: all 0.2s ease;  
  @media (max-width: 768px) {
    margin: 5 auto;
  }

  & > label {
    font-size: 18px;
    color: ${modalForm.form.textColor};
    position: absolute;
    top: 10px;
    left: 15px;
    transition: all 0.2s ease;
    z-index: 500;
    @media (max-width: 768px) {
      font-size: 13px;
    }

    ${props => props.focused && `
      color:${modalForm.form.textLabel}; 
      border-radius: 3px;
      font-size: 12px;
      transform: translateY(-16px) translateX(-5px);
      z-index: 999;
      background: ${modalForm.modal.backgroundColor};
      padding: 3px 8px;
      
      @media (max-width: 768px) {
      font-size: 11px;
      }
    `}
  }
`

export const InputText = styled.input`
  width:90%;
  border: 1px solid ${props => props.error ? '#e77674' : '#eee'};
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  outline: none;
  padding: 10px 5px;
  box-sizing: border-box;
  font-size: 16px;
  transition: all 0.2s ease;
  z-index: 500;
  cursor: pointer;
`
export const InputSelect = styled.select`
  width:90%;
  border: 1px solid ${props => props.error ? '#e77674' : '#eee'};
  border-radius: 10px;
  background-color: transparent;
  outline: none;
  padding: 12px 3px 10px 3px;
  box-sizing: border-box;
  font-size: 16px;
  transition: all 0.2s ease;
  z-index: 500;
  cursor: pointer;
`

export const ContainerBtn = styled.div`
  width : 90%;
  overflow: hidden;
  display: flex;
  justify-content : flex-end;
  align-items: center;
  margin : 10px 15px;
 `

export const FormBtn = styled.button`
  background-color: ${navbar.btn.backgroundColor};
  border: none;
  border-radius: 30px;
  color: ${navbar.btn.textColor};
  cursor: pointer;
  font-size: 15px;
  margin: 5px ;
  padding: 12px 20px;
  &:focus { outline: none };
  &:hover { opacity: 0.9 };
`
