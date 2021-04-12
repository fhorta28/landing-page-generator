import styled from 'styled-components'
import * as styles from '../../variables/style'

export const Container = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 16px;
  &:focus { outline: none };
  &:hover { opacity: 0.9 };
`
