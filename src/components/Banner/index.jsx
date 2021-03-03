// Base
import React, { useState } from 'react'

// Intern
import Button from '../Button'
import Modale from '../Modale/index'
import { Container, Image, LeftContainer, RightContainer, SubTitle, Title } from './style'
import ModaleFunction from '../Modale/ModaleFunction'
// Variables

import * as banner from '../../variables/banner'
import BannerImg from '../../variables/assets/banner_img.svg'


const Banner = () => {
  
  const {openModale, setOpenModale} = props;

  return (
    <Container>
      <LeftContainer>
        <Title>{banner.title.text}</Title> 
        <SubTitle>{banner.subTitle.text}</SubTitle> 
        <Button
            backgroundColor={banner.cta.backgroundColor}
            textColor={banner.cta.textColor}
            content={banner.cta.content}
            onClick={openModale}
        />
        <Modale openModale={openModale} close={setOpenModale}></Modale> 
      </LeftContainer>
      <RightContainer>
        <Image src={BannerImg} alt='Banner Image' />
      </RightContainer>
    </Container>
   )
}



export default Banner
