// Base
import React from 'react'
import { Link } from "react-router-dom"
// Intern
import Button from '../Button'
import { Container, BannerFooter, TextBannerFooter, BtnContainer, LinkFooterContainer, LinkFooter, FooterCopyR } from './style'
//Variables
import * as banner from '../../variables/banner'

const Footer = ({ openModal }) => {

  return (
    <Container className="footerBanner">
      <BannerFooter >
          <TextBannerFooter className="textSubtitle">Ready to get started?</TextBannerFooter>
          <BtnContainer>  
            <Button 
              className="btnSecondary"
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
        <LinkFooter className="footerLink" href="/privacy">Privacy</LinkFooter>
        </Link>
        <Link to="/terms">
          <LinkFooter href="/terms">Terms</LinkFooter>
        </Link>
        <Link to="/">
        <LinkFooter>Home</LinkFooter>
        </Link>
      </LinkFooterContainer>
    </Container>
   )
}

export default Footer
