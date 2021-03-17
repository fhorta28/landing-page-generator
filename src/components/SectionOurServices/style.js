import styled from 'styled-components'
//Variables
import * as navbar from '../../variables/navbar'

export const SectionContainer = styled.div`
  width:100%;
  height:150vh;
  padding: 20px 0 20px 0;
  border-top: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 1024px) {
    height:110vh;
  } 
  @media (max-width: 768px) {
  
  }
  @media (max-width: 560px) {
  
  }   
`
export const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin: 10px 5px;
  width:90%;

  @media (max-width: 1024px) {
     
  } 
  @media (max-width: 768px) {
    font-size: 32px;
  }
  @media (max-width: 560px) {
    font-size: 28px;
  }    
`
export const SubTitle = styled.p`
  margin: 0px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 28px;
  } 
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 560px) {
    font-size: 28px;
  } 
`
export const ServicesContainer = styled.div`
  max-width: 90%;
  max-height: 130vh;
  display: grid;
  overflow: hidden;
  box-sizing: border-box;
  grid-template-rows: 3;
  grid-gap:25px;
  padding: 30px 10px 50px 10px;

  @media (max-width: 1024px) {
   
   
  } 
  @media (max-width: 768px) {
    
    display:block;
  }
  @media (max-width: 560px) {
    font-size: ;
  } 

`
export const ServicesBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30vh;
  
  @media (max-width: 1024px) {
    height: 20vh;
    grid-gap:5px;
  } 
  @media (max-width: 768px) {
    height:20vh;
    
  }
  @media (max-width: 560px) {
    font-size: ;
  } 
`
export const ServicesBox2 = styled.div`
  display: flex;
  flex-direction:row-reverse;
  justify-content: space-around;
  align-items: center;
  height: 30vh;
  @media (max-width: 1024px) {
    height: 20vh;
    
  } 
  @media (max-width: 768px) {
    height:20vh;
    
  }
  @media (max-width: 560px) {
    font-size: ;
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
  @media (max-width: 768px) {
    display:inline-block;
    width: 40%;
    
  }
  @media (max-width: 560px) {
    font-size: ;
  } 
`
export const TitleDescription = styled.h3`
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  width: 100%;

  @media (max-width: 1024px) {
    font-size: 28px;
  } 
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 560px) {
    font-size: ;
  } 
`
export const Description = styled.p`
  margin-top: 20px;
  font-size: 18px;
  width:100%;

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 560px) {
    font-size: ;
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
    font-size: ;
  } 
`
export const BtnContainer = styled.button`
  background-color: ${navbar.btn.backgroundColor};
  color: ${navbar.btn.textColor};
  border: none;
  border-radius: 5px;
  color: ;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 200px;
  margin: 15px  0;
  &:focus { outline: none };
  &:hover { opacity: 0.9 };

  @media (max-width: 768px) {
    
    padding: 8px 100px;
  }
  @media (max-width: 560px) {
    font-size: ;
  }   
`

