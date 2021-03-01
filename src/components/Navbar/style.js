import styled from 'styled-components'

import * as navbar from '../../variables/navbar'
import * as styles from '../../variables/style'


export const Nav = styled.nav`
  width: 100%;
  height: 55px;
  background: ${navbar.navStyle.backgroundColor};
  display: flex;
  margin : 0 auto;
  padding : 0 auto;
  display: flex;
  border-bottom : 1px solid;
  justify-content: space-between;
`

export const ContainerLogo = styled.div`
  width : 80px;
  margin :  0 15px;
  border: 2px solid;

`
export const Logo = styled.img`
  width: ${navbar.logo.height};
  height: ${navbar.logo.width};
  
`

export const ContainerBtn= styled.div`
  width : 180px;
  border: 2px solid;
  display: flex;
  justify-content : center;
  align-items: center;
  

  @media (max-width: 768px){
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin : 0 auto;
    position: fixed;
    height : 100vh;
    width : 100vw;
    background-color:${navbar.navStyle.backgroundColor}; 
  }
`


export const NavBtn = styled.button`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : styles['primaryColor']};
  border: none;
  border-radius: 30px;
  color: ${props => props.textColor ? props.textColor : styles['insidePrimaryColor']};
  cursor: pointer;
  font-size: 12px;
  padding: 12px 18px;
  &:focus { outline: none };
  &:hover { opacity: 0.9 };
  
  @media (max-width: 768px){
    
  }
`



