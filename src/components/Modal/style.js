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
    transform:scaleY(.01) scaleX(0);
    animation:unfoldIn 1s cubic-bezier(0.165, 0.840, 0.440, 1.000)
    forwards;
    
@keyframes unfoldIn {
  0% {
    transform:scaleY(.005) scaleX(0);
  }
  50% {
    transform:scaleY(.005) scaleX(1);
  }
  100% {
    transform:scaleY(1) scaleX(1);
  }
}
`

export const StyleModal = styled.div`
    width: 50vw;
    height: 60vh;
    justify-content: center;
    align-items: center;
    background-color: ${modaleForm.modal.backgroundColor};
    color: ${modaleForm.modal.textColor};
    border-radius: 10px;
    box-shadow: 0 0 15px rgb(0 0 0 / 50%);
    padding : 10px;
    overflow:hidden;

    ${'' /* @keyframes bounce {
      0% {
        transform: scale(0.1);
        opacity: 0;
      }
      60% {
      transform: scale(1.2);
      opacity: 1;
      }
      100% {
        transform: scale(1);
      }
    } */}
    @media (max-width: 1024px) {
    width: 45vw;
    height: 60vh
    }
    @media (max-width: 768px) {
    height: 70vh;
    }
`
export const HeaderModal = styled.div`
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid;
`
export const TitleModal = styled.h2`
    font-size: 20px;
`
export const BtnClose = styled.div`
    cursor: pointer;
`
