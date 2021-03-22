// Base
import React from 'react'
// Intern
import Button from '../Button'
import { Container, BannerFooter, TextBannerFooter, BtnContainer, LinkFooterContainer, LinkColumn, LinkTitle, Link, FooterCopyR } from './style'
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
        <Link>
          Privacy  
        </Link>
        <Link>
          Terms
        </Link>
      </LinkFooterContainer>

    </Container>
   )
}

export default Footer
