import styled from 'styled-components'
import * as styles from '../../variables/style'

export const Container = styled.button`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : styles['primaryColor']};
  border: none;
  border-radius: 5px;
  color: ${props => props.textColor ? props.textColor : styles['insidePrimaryColor']};
  cursor: pointer;
  font-size: 16px;
  padding: 8px 16px;
  &:focus { outline: none };
  &:hover { opacity: 0.9 };
`
