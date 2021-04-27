  
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.primary.background};
    color: ${({ theme }) => theme.colors.primary.color};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
  }
  h1, h2 {
      font-family:  ${({ theme }) => theme.fontTitle};
  }
  a {
    color: ${({ theme }) => theme.link.color};
    cursor: pointer;
  }
  .btnPrimary {
    color: ${({ theme }) => theme.colors.primary.txtColorBtn};
    background-color:  ${({ theme }) => theme.colors.primary.backgroundBtn};
  }
  .btnSecondary {
    color: ${({ theme }) => theme.colors.primary.color};
    background-color:  ${({ theme }) => theme.colors.secondary.color};
  }
  .navBar, .banner, .footerBanner {
    color: ${({ theme }) => theme.colors.secondary.color};
    background-color:  ${({ theme }) => theme.colors.secondary.background};   
  }
  .textSubtitle {
    color: ${({ theme }) => theme.colors.secondary.colorSubtitle};
  }
`
