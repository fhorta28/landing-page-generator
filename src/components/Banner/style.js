import styled from 'styled-components'
import * as banner from '../../variables/banner'
import * as navbar from '../../variables/navbar'

export const Container = styled.div`
  height: 85vh;
  width:100%;
  background: ${banner.background};
  display:flex;
  box-sizing: border-box;
  align-items:center;
  padding: 0 50px;
  @media (max-width: 768px) {
    justify-content : center;
    flex-wrap: wrap-reverse;
    padding: 0 10px;
  }
`

export const Image = styled.img`
 width:100%;
 object-fit:cover;
 object-position:10px 10px 10px 10px;
`

export const LeftContainer = styled.div`
  position:relative;
  width:50%;
  @media (max-width: 768px) {
    height: 50%;
  }
`

export const RightContainer = styled.div`
  position: relative;
  width:600px;
  height:400px;
  @media (max-width: 768px) {
    height: 50%;
    width:100%;
  }
`

export const SubTitle = styled.p`
  color: ${banner.subTitle.color};
  font-size: 24px;
  font-weight: 400;
  margin: 10px 0 30px 0;
  @media (max-width: 768px) {
  text-align:center;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 5px 0 10px 0;
  }
`

export const Title = styled.h1`
  color: ${banner.title.color};
  font-size: 48px;
  font-weight: 600;
  margin: 0;
  @media (max-width: 768px) {
  font-size: 1.3rem;
  width:100%;
  
  }
`

