import styled from 'styled-components'

export const SideBarLogo = styled.div`
  display: flex;
  color: #bdbdbd;
  z-index: 4;
`

export const Btn = styled.div`
  display: flex;
  justify-content: flex-start;
  position: fixed;
  top:150px;
  left:10px;
  z-index: 4;
  @media (max-width: 1024px) {
    top:200px;
  }
  @media (max-width: 768px) {
    top: 150px
  }
  @media (max-width: 560px) {
    top: 120px
  } 
`
