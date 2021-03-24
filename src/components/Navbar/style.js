import styled from 'styled-components'

//Variables
import * as navbar from '../../variables/navbar'

export const Nav = styled.nav`
  width: 100%;
  box-sizing: border-box;
  height: 15vh;
  background: ${navbar.navStyle.backgroundColor};
  display: flex;
  margin: 0 auto;
  padding: 0 auto;
  display: flex;
  box-shadow: 0 8px 6px -6px rgb(0, 0, 0, 0.4) ;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 99;
`
export const ContainerBrand = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: space-around;
  width: ${navbar.containerLogoSlogan.width};
  margin: 0 15px;
`
export const Logo = styled.img`
  width: ${navbar.logo.height};
  height: ${navbar.logo.width};
`
export const Slogan = styled.div`
  display: flex;
  align-items: center;
  width : ${navbar.slogan.width};
  color: ${navbar.slogan.textColor} ;
`
export const ContainerMenu = styled.ul`
  width : 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin : 0 15px;

  @media (max-width: 768px){
    margin:0;
    padding: 0;
    flex-flow: column nowrap;
    transform: ${({ open }) => !open ? 'translateX(0)' : 'translateX(100%)'};
    z-index:1;
    align-items: center;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color:${navbar.navStyle.backgroundColor}; 
  }
` 
export const ItemsMenu = styled.li`
  display:flex;
  justify-content: space-around;
  padding: 10px 10px;
  list-style-type: none; 
`

export const StyleBurger = styled.div`
  color: white;
  display: none;
  width: 35px;
  height: 33px;
  margin: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  
  @media (max-width: 768px){
    display: flex;
    z-index:1;
  }
`
