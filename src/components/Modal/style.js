import styled from 'styled-components'

//Variables
import * as modaleForm from'../../variables/modalForm'


export const ModalWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0, 0.3);
    
    ${'' /* animation-name: grow-modal;
    animation-duration: .4s;
    animation-timing-function: ease-in-out;
    @keyframes grow-modal {
      0% { opacity: .2; }
      25% { opacity: .4; }
      50% { opacity: .6; }
      75% { opacity: .8; }
      100% { width: 410px; height: 190px; opacity: .9; }
    } */}

`

export const StyleModal = styled.div`
    width: 50vw;
    height: 50vh;
    background-color: ${modaleForm.modal.backgroundColor};
    color: ${modaleForm.modal.textColor};
    border-radius: 12px;
    box-shadow: 0 0 5px rgb(0 0 0 / 50%);
    padding : 15px;
    animation: appear 0.3s linear;

`
export const BannerModal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid;

`

export const BtnClose = styled.div`
    cursor: pointer;

`







