import styled from 'styled-components'
//Variables
import * as navbar from '../../variables/navbar'

export const SectionContainer = styled.div`
  width:100%;
  height:160vh;
  padding: 20px 0 20px 0;
  border-top: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-around;
  
  @media (max-width: 1024px) {
    height: 150vh;
    padding: 10px 0 10px 0;
  } 
  @media (max-width: 768px) {
    height: 160vh;
    padding: 10px 0 10px 0;
  }   
`
export const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin: 10px 5px;
  width: 90%;

  @media (max-width: 1024px) {
    font-size: 32px;
  } 
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (max-width: 560px) {
    font-size: 18px;
  }    
`
export const ServicesContainer = styled.div`
  width: 90%;
  max-height: 150vh;
  display: grid;
  overflow: hidden;
  box-sizing: border-box;
  grid-template-rows: 3;
  grid-gap:25px;
  padding: 30px 10px 50px 10px;

  @media (max-width: 1024px) {
    grid-gap: 35px;
    width: 100%;
  } 
  @media (max-width: 768px) {
    padding: 30px 8px 50px 8px; 
  }
  @media (max-width: 560px) {
    grid-gap: 26px;
    padding: 10px 5px;
  }
`
export const ServicesBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 35vh;
  
  @media (max-width: 1024px) {
    height: 35vh;
    grid-gap: 5px;
  } 
  @media (max-width: 768px) {
    height: 30vh; 
  }
  @media (max-width: 560px) {
    flex-direction: column-reverse;
    text-align: center;
    height: 40vh;
  } 
`
export const ServicesBox2 = styled.div`
  display: flex;
  flex-direction:row-reverse;
  justify-content: space-around;
  align-items: center;
  height: 30vh;
  @media (max-width: 1024px) {
    height: 35vh; 
  } 
  @media (max-width: 768px) {
    height: 30vh; 
  }
  @media (max-width: 560px) {
   flex-direction: column-reverse;
   text-align: center;
   height: 35vh;
  } 
`
export const ServicesDescription = styled.div`
  margin: 0;
  padding: 10px;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 50%;
  }  
  @media (max-width: 560px) {
    padding: 5px;
    width: 95%;
    height: 50%;
  } 
`
export const TitleDescription = styled.h3`
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  width: 100%;

  @media (max-width: 1024px) {
    font-size: 22px;
  } 
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 560px) {
    font-size:16px ;
  } 
`
export const Description = styled.p`
  margin-top: 20px;
  font-size: 18px;
  width:100%;

  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 560px) {
    margin-top: 10px;
  } 
`
export const ImgServices = styled.img`
  width: 300px;
  height: 150px;
  object-size: cover;
  object-position: center;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    width: 200px;
    height:150px;
    margin-bottom: 40px;
  } 
  @media (max-width: 768px) {
    width: 200px;
    height: 150px;   
  }
  @media (max-width: 560px) {
    width: 100px;
    height: 80px;
    margin-bottom: 20px;
  } 
`
export const BtnContainer = styled.button`
  background-color: ${navbar.btn.backgroundColor};
  color: ${navbar.btn.textColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 200px;
  &:focus { outline: none };
  &:hover { opacity: 0.9 };

  @media (max-width: 768px) {
    padding: 8px 100px;
  }
  @media (max-width: 560px) {
    padding: 6px 80px;
  }     
`
