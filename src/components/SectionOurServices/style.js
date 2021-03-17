import styled from 'styled-components'


export const SectionContainer = styled.div`
  width:100%;
  height:180vh;
  border-top: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;

  @media (max-width: 1024px) {
  
  } 
  @media (max-width: 768px) {
  
  }
  @media (max-width: 560px) {
  
  }   
`
export const Title = styled.h2`
  font-size:48px;
  font-weight: 700;
  text-align:center;
`
export const SubTitle = styled.p`
  margin: 0px;
  font-size:35px;
  font-weight: 700;
`
export const ServicesContainer = styled.div`
  height:150vh;
  display:grid;
  overflow:hidden;
  box-sizing:border-box;
  grid-template-rows: 3;
  padding:10px 10px;
`
export const ServicesBox = styled.div`
 display:flex;
 justify-content:space-around;
 align-items:center;
 height:30vh;
`
export const ServicesDescription = styled.p`
  margin:0 ;
  font-size:25px;
  font-weight: 600;
  width:50%;
`
export const ImgServices = styled.img`
  width: 400px;
  height:150px;
  object-size: cover;
  object-position: center;
`
export const BtnContainer = styled.button`
  background-color: ;
  border: none;
  border-radius: 5px;
  color: ;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 16px;
  &:focus { outline: none };
  &:hover { opacity: 0.9 };
`

