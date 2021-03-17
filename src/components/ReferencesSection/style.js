import styled from 'styled-components'

export const ReferencesContainer = styled.div`
  height:30vh;
  box-sizing:border-box;
  display:flex;
  flex-direction:column;
  justify-content:center;

  @media (max-width: 1024px) {
    height:30vh;
  } 
  @media (max-width: 768px) {
    height:25vh;
  }
  @media (max-width: 560px) {
    height:20vh;
  }   
`
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing:2px;
  color:#bdbdbd;
  text-align:center;
  
  @media (max-width: 1024px) {
    font-size:20px;
  } 
  @media (max-width: 768px) {
    font-size:18px;
  }
  @media (max-width: 560px) {
    font-size:15px;
  } 
`
export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content:space-around;
`
export const LogoCompagnie = styled.img`
  width:50px;
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
