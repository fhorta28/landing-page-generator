// Base
import React, { useEffect } from 'react'
//Library animation scroll
import Aos from 'aos'
import 'aos/dist/aos.css'
// Intern
import { SectionContainer, Title, ServicesContainer, ServicesBox, ServicesBox2, ServicesDescription, TitleDescription, Description, ImgServices, BtnContainer } from './style'
//Variables
import image from '../../variables/assets/idea.svg'
import image2 from '../../variables/assets/requirement.svg'
import image3 from '../../variables/assets/product-release.svg'


const SectionServices = ({openModal}) => {

  //Aos initialize
  useEffect(() =>{
      Aos.init({})
  }, []);

  return (
    <SectionContainer>
      <Title>Smarter PR with powerful, easy-to-use software</Title>
      <ServicesContainer>
        <ServicesBox>
          <ServicesDescription>
            <TitleDescription>Lorem ipsum dolor sit amet.</TitleDescription>
            <Description>Quisque id ornare urna. Vestibulum accumsan tortor et ipsum dapibus, ac malesuada sapien volutpat. Curabitur rutrum mollis urna. Nam tincidunt tellus sit amet erat pretium, non imperdiet turpis mattis. Proin vel justo libero. Ut non malesuada felis. Nullam non odio.</Description> 
          </ServicesDescription>
          <ImgServices data-aos="zoom-out-left" data-aos-duration="1500" src={image}/>
        </ServicesBox>
        <ServicesBox2>
          <ServicesDescription>
            <TitleDescription>Lorem ipsum dolor sit amet.</TitleDescription>
            <Description>Quisque id ornare urna. Vestibulum accumsan tortor et ipsum dapibus, ac malesuada sapien volutpat. Curabitur rutrum mollis urna. Nam tincidunt tellus sit amet erat pretium, non imperdiet turpis mattis. Proin vel justo libero. Ut non malesuada felis. Nullam non odio.</Description> 
          </ServicesDescription>
          <ImgServices data-aos="zoom-out-right" data-aos-duration="1500" src={image2}/>
        </ServicesBox2>
        <ServicesBox>
          <ServicesDescription>
            <TitleDescription>Lorem ipsum dolor sit amet.</TitleDescription>
            <Description>Quisque id ornare urna. Vestibulum accumsan tortor et ipsum dapibus, ac malesuada sapien volutpat. Curabitur rutrum mollis urna. Nam tincidunt tellus sit amet erat pretium, non imperdiet turpis mattis. Proin vel justo libero. Ut non malesuada felis. Nullam non odio.</Description> 
          </ServicesDescription>
          <ImgServices data-aos="zoom-out-left" data-aos-duration="1500" src={image3}/>
        </ServicesBox>
      </ServicesContainer>
      <BtnContainer className="btnPrimary" onClick={openModal}>
        Demandez votre démo
      </BtnContainer>
    </SectionContainer>
   )
}

export default SectionServices
