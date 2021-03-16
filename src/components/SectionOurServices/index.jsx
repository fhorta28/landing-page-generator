// Base
import React, { useEffect } from 'react'
//Library animation scroll
import Aos from 'aos'
import 'aos/dist/aos.css'
// Intern
import { SectionContainer, Title,SubTitle, ServicesContainer,ServicesBox, ServicesDescription, ImgServices, BtnContainer } from './style'
//Variables
import image from '../../variables/assets/idea.svg'
import image2 from '../../variables/assets/requirement.svg'
import image3 from '../../variables/assets/product-release.svg'


const SectionServices = () => {

  //Aos initialize
  useEffect(() =>{
      Aos.init({})
  }, []);

  return (
    <SectionContainer>
      <Title>Smarter PR with powerful, easy-to-use software</Title>
      <ServicesContainer>
        <SubTitle>Find the right journalists to pitch</SubTitle>
        <ServicesBox>
          <ServicesDescription>Lorem iServicesDescriStionsum dolor sit amet, consectetur adiServicesDescriStioniscing elit. ServicesDescriStionhasellus </ServicesDescription>
          <ImgServices data-aos="fade-left" data-aos-delay="900" src={image}/>
        </ServicesBox>
        <ServicesBox>
          <ImgServices data-aos="fade-right" data-aos-delay="900" src={image2}/>
          <ServicesDescription>Lorem iServicesDescriStionsum dolor sit amet, consectetur adiServicesDescriStioniscing elit. ServicesDescriStionhasellus </ServicesDescription>
        </ServicesBox>
        <ServicesBox>
          <ServicesDescription>Lorem iServicesDescriStionsum dolor sit amet, consectetur adiServicesDescriStioniscing elit. ServicesDescriStionhasellus </ServicesDescription>
          <ImgServices data-aos="fade-left" data-aos-delay="900" src={image3}/>
        </ServicesBox>
      </ServicesContainer>
      <BtnContainer>
        Demandez votre démo
      </BtnContainer>
    </SectionContainer>
   )
}

export default SectionServices
