import styled from 'styled-components'
import * as banner from '../../variables/banner'
import * as navbar from '../../variables/navbar'

export const Container = styled.div`
  height: calc(100vh - ${navbar.navStyle.navbarHeight});
  background: ${banner.background};
  display: flex;
  padding: 0 50px;
`

export const Image = styled.img`
  width: 600px;
`

export const LeftContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`

export const RightContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 50%;
`

export const SubTitle = styled.p`
  color: ${banner.subTitle.color};
  font-size: 24px;
  font-weight: 400;
  margin: 10px 0 30px 0;
`

export const Title = styled.h1`
  color: ${banner.title.color};
  font-size: 48px;
  font-weight: 600;
  margin: 0;
`
