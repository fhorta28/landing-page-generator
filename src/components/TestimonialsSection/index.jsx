import React, { useState } from 'react'
//Intern
import { SectionContainer, Title, TitleSub, SliderContainer, Slide, SlideText, TestimonialsAuthor, TestimonialsImg, TestimonialsLogo, TestimonialsText, SlideBtnLeft, SlideBtnRight } from './style'

//Library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { slideData } from './slideData'


const TestimonialsSection = ({ slides }) => {
  
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1);
  }
  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
  }

  if(!Array.isArray(slides) || slides.length <= 0){
    return null;
  }

  return (
    <SectionContainer >
      <Title>Here’s what our customers say about us</Title>
      <TitleSub>They trusted us</TitleSub>
      <SliderContainer>
        <SlideBtnLeft onClick = {prevSlide}>
          <FontAwesomeIcon icon='angle-left' size="2x"/>
        </SlideBtnLeft>
        <SlideBtnRight onClick = {nextSlide}>
          <FontAwesomeIcon icon='angle-right' size="2x"/>
        </SlideBtnRight>      
        { slideData.map((slide, index) => {
          return(
            <Slide key={index} active={index === current}>
              {index === current && (
                <>
                  <SlideText>
                    <TestimonialsLogo src={slide.logo} alt='logo compagnie'/>
                    <TestimonialsText >{slide.text}</TestimonialsText>
                    <TestimonialsAuthor>
                      {slide.author}
                      <span>{slide.authorJob}</span>
                    </TestimonialsAuthor>
                  </SlideText>
                  <TestimonialsImg src={slide.image} alt='testimonials image slide'/>
                </>
              )}
            </Slide>
          )
        })}                          
      </SliderContainer>
    </SectionContainer>                 
  )
}

export default TestimonialsSection
