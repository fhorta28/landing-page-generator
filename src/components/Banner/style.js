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
  flex-wrap: wrap;
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
  align-items:center;
 
  @media (max-width: 768px) {
  display:flex;
  flex-direction:column;
  justify-content:center;
  height: 45%;
  width:100%;
  }
`
export const RightContainer = styled.div`
  position: relative;
  width:50%;
  height:400px;

  @media (max-width: 1024px) {
  width:450px;
  } 
  @media (max-width: 768px) {
  width:350px;
  height:55%;
  }
  @media (max-width: 560px) {
  width:300px;
  }
`
export const SubTitle = styled.p`
  color: ${banner.subTitle.color};
  font-size: 24px;
  font-weight: 400;
  margin: 10px 0 30px 0;
  padding: 10px 20px;

  @media (max-width: 1024px) {
  padding: 10px 20px;
  } 
  @media (max-width: 768px) {
  padding: 15px 15px;
  }
  @media (max-width: 560px) {
  text-align:center;
  font-size: 18px;
  font-weight: 400;
  margin: 5px 0 10px 0;
  }
`
export const Title = styled.h1`
  color: ${banner.title.color};
  font-size: 48px;
  font-weight: 600;
  margin: 0;

  @media (max-width: 1024px) {
  font-size: 40px; 
  padding: 5px 10px;
  } 
  @media (max-width: 768px) {
  font-size: 35px;
  padding: 8px 15px;
  }
  @media (max-width: 560px) {
  text-align:center;
  font-size: 30px;
  font-weight: 400;
  margin: 5px 0 5px 0;
  }
`
