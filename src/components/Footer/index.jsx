// Base
import React from 'react'
import { Link } from "react-router-dom"
// Intern
import Button from '../Button'
import { Container, BannerFooter, TextBannerFooter, BtnContainer, LinkFooterContainer, FooterCopyR } from './style'
//Variables
import * as banner from '../../variables/banner'

const Footer = ({ openModal }) => {

  return (
    <Container>
      <BannerFooter>
          <TextBannerFooter>Ready to get started?</TextBannerFooter>
          <BtnContainer>  
            <Button 
              backgroundColor={banner.cta.backgroundColor}
              textColor={banner.cta.textColor}
              content={banner.cta.content}
              onClick={openModal}
              >
              Demander la démo
            </Button>
          </BtnContainer> 
      </BannerFooter>
      <LinkFooterContainer>
        <FooterCopyR>© 2021 Landing-page-generator. All rights reserved.</FooterCopyR>
        <Link to="/privacy">
          Privacy  
        </Link>
        <Link to="/terms">
          <LinkFooter href="/terms">Terms</LinkFooter>
        </Link>
        <Link to="/">
          Home  
        </Link>
      </LinkFooterContainer>
    </Container>
   )
}

export default Footer
