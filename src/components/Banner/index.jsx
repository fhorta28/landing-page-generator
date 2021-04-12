// Base
import React from 'react'

// Intern
import Button from '../Button'
import { Container, Image, LeftContainer, RightContainer, SubTitle, Title } from './style'

// Variables

import * as banner from '../../variables/banner'
import BannerImg from '../../variables/assets/banner_img.svg'


const Banner = ({openModal}) => {

  return (
    <Container className="banner">
      <LeftContainer>
        <Title className="title">{banner.title.text}</Title> 
        <SubTitle className ="textSubtitle">{banner.subTitle.text}</SubTitle> 
        <Button
          className="btnSecondary"
          content={banner.cta.content}
          onClick={openModal}
        />
      </LeftContainer>
      <RightContainer>
        <Image src={BannerImg} alt='Banner Image' />
      </RightContainer>
    </Container>
   )
}

export default Banner
