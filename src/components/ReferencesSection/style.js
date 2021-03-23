import styled from 'styled-components'

export const ReferencesContainer = styled.div`
  height:25vh;
  box-sizing:border-box;
  display:flex;
  flex-direction:column;
  justify-content:center;

  @media (max-width: 1024px) {
    height: 20vh;
  } 
  @media (max-width: 768px) {
    height:20vh;
  }
  @media (max-width: 560px) {
    height:20vh;
  }   
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing:2px;
  color:#bdbdbd;
  text-align:center;
  
  @media (max-width: 1024px) {
    font-size:14px;
  } 
  @media (max-width: 768px) {
    font-size:14px;
  }
  @media (max-width: 560px) {
    font-size:12px;
  } 
`
export const LogoContainer = styled.div`
  margin: 20px;
  width: 60%;
  align-self: center;
  display: flex;
  justify-content:space-between;

  @media (max-width: 1024px) {
    width:70%;
  } 
  @media (max-width: 768px) {
    width:80%;
  }
  @media (max-width: 560px) {
    font-size:15px;
  } 
`
export const LogoCompagnie = styled.img`
  width:60px;
  height:70px;

  @media (max-width: 1024px) {
    width:50px;
    height:50px;
  } 
  @media (max-width: 768px) {
    width:35px;
    height:40px;
  }
  @media (max-width: 560px) {
    width:30px;
    height:30px;
  } 
`
