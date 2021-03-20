import styled from 'styled-components'
import backgroundImg from '../../variables/assets/backgroundTestiSection.jpg'

export const SectionContainer = styled.div`
  overflow:hidden;
  width:100%;
  height:100vh;
  padding: 20px 0 20px 0;
  border-top: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-around;
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
    font-size:14px ;
  } 
`
export const SliderContainer = styled.div`
  overflow:hidden;
  position:relative;
  width: 1000px;
  height: 70vh;
  margin : 0 auto;
  background-color:grey;
  border: 1px solid;
  box-shadow: 10px 10px 23px -4px rgba(66,63,121,0.8);

  @media (max-width: 1024px) {
 
  } 
  @media (max-width: 768px) {
   
  }
  @media (max-width: 560px) {

  }
`
export const Slide = styled.div`
  position: relative;
  width: 100%;
  height:100%;
  display: flex;
  flex-direction:row-reverse;
  justify-content:center;
  align-items: center;
  background-color:black;

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
export const SlideText = styled.div`
  width:60%;
  height:100%;
  padding-left:20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: white;
 
  @media (max-width: 1024px) {
 
  } 
  @media (max-width: 768px) {
  
  }
  @media (max-width: 560px) {
 
  } 
`
export const TestimonialsLogo = styled.img`
  width: 40px;
  height: 40px;
  margin:10px;
  
  @media (max-width: 1024px) {
   
  } 
  @media (max-width: 768px) {
    
  }
  @media (max-width: 560px) {
   
  } 
`
export const TestimonialsText = styled.p`
  margin: 0;
  width:80%;
  padding: 10px;
  font-size: 18px;
  line-height: 1.5rem;

@media (max-width: 1024px) {
 
}  
@media (max-width: 560px) {
 
} 
`
export const TestimonialsAuthor = styled.p`
  font-size: 18px;
  font-height:700;
  padding: 10px;
  margin-top: 20px;
  display:flex;
  flex-direction:column;

 &:before {
   content: "";
   height:4px;
   width:60px;
   position: absolute;
   border-radius:5px;
   bottom:110px;
   background: linear-gradient(90deg, rgba(66,63,121,1) 0%, rgba(209,207,207,0.2) 100%);
  }

  & > span {
    font-size: 16px;
    text-transform: uppercase;
    color:#bdbdbd;
  }
 
  @media (max-width: 1024px) {
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
   
  } 
  @media (max-width: 768px) {
    
  }
  @media (max-width: 560px) {
   
  } 
`
export const SlideBtnRight = styled.div`
  position: absolute;
  display:flex;
  justify-content:center;
  align-items:center;
  top: 45%;
  right: 2px;
  z-index:99;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: rgb(236, 236, 236, 0.8);
  cursor: pointer;
  user-sleect:none;
  &:hover { background-color: rgb(66, 63, 121, 0.8) };

  @media (max-width: 1024px) {
   
  } 
  @media (max-width: 768px) {
    
  }
  @media (max-width: 560px) {
   
  } 
`
export const SlideBtnLeft = styled.div`
  position: absolute;
  display:flex;
  justify-content:center;
  align-items:center;
  top: 45%;
  left: 2px;
  z-index:99;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: rgb(236, 236, 236, 0.8);
  cursor: pointer;
  user-sleect:none;
  &:hover { background-color: rgb(66, 63, 121, 0.8) };

  @media (max-width: 1024px) {
   
  } 
  @media (max-width: 768px) {
    
  }
  @media (max-width: 560px) {
   
  } 
`
 