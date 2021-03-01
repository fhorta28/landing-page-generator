// Base
import React from 'react'
import PropTypes from 'prop-types'
// Intern
import Button from '../Button'
import { Container, Image, LeftContainer, RightContainer, SubTitle, Title } from './style' 
// Variables
import * as banner from '../../variables/banner'
import BannerImg from '../../variables/assets/banner_img.svg'


const Banner = props => {
  // Props & States
  const { cta, subTitle, title } = props

  return (
    <Container>
      <LeftContainer>
        { title && <Title>{title}</Title> }
        { subTitle && <SubTitle>{subTitle}</SubTitle> }
        { cta && <Button
          backgroundColor={banner.cta.backgroundColor}
          textColor={banner.cta.textColor}
          content={cta.content}
          onClick={cta.action}
        /> }
      </LeftContainer>
      <RightContainer>
          <Image src={BannerImg} alt='Banner Image' />
      </RightContainer>
    </Container>
  )
}

Banner.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  cta: PropTypes.object,
}

export default Banner
