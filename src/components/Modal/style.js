
import styled from 'styled-components'

import * as modaleForm from'../../variables/modalForm'


export const WrapperModale = styled.div`
    
   width:"300px";
   height:"300px";
   ${'' /* transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'}; */}
   background-color: rgb(255, 255, 255);

`

export const ModalWrapper = styled.div`

    position:fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(255,255,255, 0.4);

`

export const StyleModal = styled.div`

    width: 400px;
    height: 200px;
    background-color: #fff;
    box-shadow: 0 0 15 rgba(0,0,0, 0.2);
    padding : 15px;

`

export const BtnClose = styled.div`

    width: "30px";
    height: "30px";
    cursor: pointer;
    backgroundColor: rgb(255, 255, 255);

`





