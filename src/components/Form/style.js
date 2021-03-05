import styled from 'styled-components'
import * as modalForm from '../../variables/modalForm'

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  margin-bottom: 8px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  position: relative;
  transition: all 0.2s ease;  

  & > label {
    color: white;
    position: absolute;
    top: 15px;
    left: 15px;
    transition: all 0.2s ease;
    z-index: 500;

    ${props => props.focused && `
      border-radius: 3px;
      font-size: 15px;
      transform: translateY(-23px) translateX(-5px);
      z-index: 501;
      background: ${modalForm.modal.backgroundColor};
      padding: 0 8px;
    `}
  }
`

export const InputText = styled.input`
  
  border: 1px solid ${props => props.error ? '#e77674' : '#eee'};
  border-radius: 10px;
  background-color: transparent;
  outline: none;
  padding: 12px 3px 12px 15px;
  font-size: 16px;
  transition: all 0.2s ease;
  z-index: 500;

`
export const InputSelect = styled.select`
  
  border: 1px solid ${props => props.error ? '#e77674' : '#eee'};
  border-radius: 10px;
  background-color: transparent;
  outline: none;
  padding: 12px 3px 12px 15px;
  font-size: 16px;
  transition: all 0.2s ease;
  z-index: 500;

`
