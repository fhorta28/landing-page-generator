import React from 'react';

//Intern
import { StyleModale } from './style';


const Modale = ({openModale, close}) => openModale ?(

    <>
        <ContainerModale className='overlay'>
            <WrapperModale>
                <StyleModale>
                    <BtnClose onclick={close}></BtnClose>
                </StyleModale>
            </WrapperModale>
        </ContainerModale>
    </>

) : null;

export default Modale
   


