import styled from 'styled-components'

import * as banner from '../../variables/banner'

export const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 40vh;
  }
`
export const BannerFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30vh;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const TextBannerFooter = styled.p`
  width: 60%;
  text-align: center;
  color: ${banner.subTitle.color};
  font-size: 48px;
  font-weight: 600;

  @media (max-width: 768px) {
    width: 50%;
    font-size: 32px;
  }
  @media (max-width: 560px) {
    font-size: 22px;
  }    
`
export const BtnContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 60%;
  }  
`

export const LinkFooterContainer = styled.div`
  width: 100%;
  height: 20vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${banner.title.color};

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: 15vh;
  } 
`
export const LinkFooter = styled.a`
  border-left: 1px solid grey;
  padding:  0px 10px;
  

  @media (max-width: 768px) {
    width: 30px;
    margin: 5px;
    font-size: 14px;
  }   
`
export const FooterCopyR = styled.p`
  color: ${banner.subTitle.color};
  margin: 0 5px;
  text-align: center;
  background-color: black;

  @media (max-width: 768px) {
    font-size: 14px;
  } 
`
