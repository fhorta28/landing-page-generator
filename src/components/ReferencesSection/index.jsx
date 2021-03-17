// Base
import React from 'react'
// Intern
import { ReferencesContainer, Title, LogoContainer, LogoCompagnie } from './style'
//Variables
import discord from '../../variables/assets/discord.svg'
import symbols1 from '../../variables/assets/symbols-1.svg'
import telegram from '../../variables/assets/telegram.svg'
import symbols2 from '../../variables/assets/symbols-2.svg'
import reddit from '../../variables/assets/reddit-logo.svg'
import slack from '../../variables/assets/slack.svg'
import symbols from '../../variables/assets/symbols.svg'
import github from '../../variables/assets/github.svg'

const ReferencesSection = () => {

  return (
    <ReferencesContainer>
      <Title>TRUSTED BY FORWARD-THINKING COMPANIES AROUND THE WORLD</Title>
      <LogoContainer>
        <LogoCompagnie src={discord} alt="logo discord"/>
        <LogoCompagnie src={symbols1} alt="logo compagnie 2"/>
        <LogoCompagnie src={telegram} alt="logo telegram"/> 
        <LogoCompagnie src={symbols2} alt="logo compagnie 3"/>
        <LogoCompagnie src={reddit} alt="logo reddit"/>
        <LogoCompagnie src={symbols} alt="logo compagnie"/>
        <LogoCompagnie src={slack} alt="logo slack"/>
        <LogoCompagnie src={github} alt="logo github"/> 
      </LogoContainer>  
    </ReferencesContainer>
   )
}

export default ReferencesSection
