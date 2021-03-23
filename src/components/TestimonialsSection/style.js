import styled from 'styled-components'
import backgroundImg from '../../variables/assets/bg-img.jpg'

export const SectionContainer = styled.div`
  overflow: hidden;
  width:100%;
  height:100vh;
  padding: 20px 0 20px 0;
  border-top: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgb(237, 231, 246);

@media (max-width: 1024px) {
  height: 100vh;
  padding: 10px 0 10px 0;
} 
@media (max-width: 768px) {
  height: 100vh;
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
export const TitleSub = styled.h3`
  text-align: center;
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  width: 100%;

  @media (max-width: 1024px) {
    font-size: 18px;
  } 
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 560px) {
    font-size: 14px ;
  } 
`
export const SliderContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 80%;
  max-height: 70vh;
  box-shadow: 10px 10px 23px -4px rgba(66,63,121,0.8);

  @media (max-width: 1024px) {
    max-width: 90%;
  } 
  @media (max-width: 768px) {
    max-width: 100%;
  }
`
export const Slide = styled.div`
  height: 70vh;
  display:flex;
  flex-direction:row-reverse;
  background-color:black;
  opacity: 0;
  transition-duration: 1s ease;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;     
  } 

  ${props => props.active &&`
  opacity: 1;
  transition-duration: 2s;
  transform: scale(1.02);
  `}
`
export const SlideText = styled.div`
  width: 60%;
  height: 100%;
  padding-left: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: white;
 
  @media (max-width: 1024px) {
    padding: 0;
    width:100%;
    height:50%;
  } 
`
export const TestimonialsLogo = styled.img`
  width: 40px;
  height: 40px;
  margin:10px;
  
  @media (max-width: 1024px) {
    padding-left: 10px;
  } 
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;    
  }
  @media (max-width: 560px) {
   width: 18px;
   height: 18px; 
  } 
`
export const TestimonialsText = styled.p`
  margin: 0;
  width: 80%;
  padding: 10px;
  font-size: 18px;
  line-height: 1.5rem;

  @media (max-width: 1024px) {
    width: 90%;
    text-align: center;
  }  
`
export const TestimonialsAuthor = styled.p`
  font-size: 18px;
  font-height: 700;
  padding: 10px;
  margin-top: 20px;
  display:flex;
  flex-direction: column;

 &:before {
   content: "";
   height:4px;
   width: 60px;
   position: absolute;
   border-radius: 5px;
   bottom: 105px;
   background: linear-gradient(90deg, rgba(66,63,121,1) 0%, rgba(209,207,207,0.2) 100%);
   
   @media (max-width: 1024px) {
     bottom: 100px;
   }
   @media (max-width: 768px) {
     bottom: 80px;
   }
   @media (max-width: 560px) {
     bottom: 70px;
   }   
  }

  & > span {
    font-size: 16px;
    text-transform: uppercase;
    color: #bdbdbd;

    @media (max-width: 1024px) {
      
    } 
    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 560px) {
      font-size: 12px; 
    }
  }
 
  @media (max-width: 1024px) {
    padding-left: 20px;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 560px) {
    margin-top: 12px;
  } 
`
export const TestimonialsImg = styled.img`
  width: 40%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  @media (max-width: 1024px) {
    height: 60%;
    width: 100%;
    object-position: center ;
  } 
`
export const SlideBtnRight = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 45%;
  right: 2px;
  z-index: 1;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: rgb(236, 236, 236, 0.8);
  cursor: pointer;
  user-select: none;
  &:hover { background-color: rgb(66, 63, 121, 0.8) };

  @media (max-width: 768px) {
  width: 40px;
  height: 40px;    
  }
`
export const SlideBtnLeft = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 45%;
  left: 2px;
  z-index: 1;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: rgb(236, 236, 236, 0.8);
  cursor: pointer;
  user-select: none;
  &:hover { background-color: rgb(66, 63, 121, 0.8) };

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;     
  }
`
 