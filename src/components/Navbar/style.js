import styled from 'styled-components'

//Variables
import * as navbar from '../../variables/navbar'

export const Nav = styled.nav`
  width: 100%;
  height: 65px;
  background: ${navbar.navStyle.backgroundColor};
  display: flex;
  margin : 0 auto;
  padding : 0 auto;
  display: flex;
  border-bottom : 1px solid;
  justify-content: space-between;
`

export const ContainerBrand = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: space-around;
  width : ${navbar.containerLogoSlogan.width};
  margin :  0 15px;
`
export const Logo = styled.img`
  width: ${navbar.logo.height};
  height: ${navbar.logo.width};
`
export const Slogan = styled.div`
  display: flex;
  align-items: center;
  width : ${navbar.slogan.width};
  color:${navbar.slogan.textColor} ;
  
`

export const ContainerBtn = styled.div`
  width : 180px;
  display: flex;
  justify-content : flex-end;
  align-items: center;
  margin : 0 15px;
  @media (max-width: 768px){
  margin: 0 auto;
  flex-flow: column nowrap;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'}; 
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  height : 100vh;
  width : 100vw;
  background-color:${navbar.navStyle.backgroundColor}; 
  }
` 
export const NavBtn = styled.button`
  background-color: ${navbar.btn.backgroundColor};
  border: none;
  border-radius: 30px;
  color: ${navbar.btn.textColor};
  cursor: pointer;
  font-size: 12px;
  padding: 12px 18px;
  &:focus { outline: none };
  &:hover { opacity: 0.9 };
`

export const StyleBurger = styled.div`
  display: none;
  width: 35px;
  height: 33px;
  margin: 18px;
  align-items: end;
  justify-content: center;
  background-color: ${({ open }) => open ? navbar.btn.backgroundColorOnclick : navbar.btn.backgroundColor}; 
  border-radius: 3px;
  @media (max-width: 768px){
    display: flex;
    z-index: 1;
  }
  
`
