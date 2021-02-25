import styled from 'styled-components'
import * as styles from '../../variables/style'

export const Container = styled.button`
  background-color: ${styles['primaryColor']};
  border: none;
  border-radius: 5px;
  color: ${styles['insidePrimaryColor']};;
  cursor: pointer;
  padding: 5px 10px;
  &:focus { outline: none };
  &:hover { opacity: 0.9 };
`
