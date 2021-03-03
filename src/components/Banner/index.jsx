// Base
import React from 'react'

// Intern
import Button from '../Button'
import Modal from '../Modal/index'
import { Container, Image, LeftContainer, RightContainer, SubTitle, Title } from './style'

// Variables

import * as banner from '../../variables/banner'
import BannerImg from '../../variables/assets/banner_img.svg'


const Banner = () => {
  

  return (
    <Container>
      <LeftContainer>
        <Title>{banner.title.text}</Title> 
        <SubTitle>{banner.subTitle.text}</SubTitle> 
        <Button
            backgroundColor={banner.cta.backgroundColor}
            textColor={banner.cta.textColor}
            content={banner.cta.content}
            
        />
        <Modal></Modal> 
      </LeftContainer>
      <RightContainer>
        <Image src={BannerImg} alt='Banner Image' />
      </RightContainer>
    </Container>
   )
}



export default Banner
