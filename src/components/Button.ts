import styled from 'styled-components'
import { IButton } from './Interfaces/IButton'

export const Button = styled.button<IButton>`
  font-size: 1rem;
  color: #fff;
  background-color: var(
    ${({ secondaryBgColor }) => (secondaryBgColor ? '--green' : '--blue-light')}
  );
  border: 0;
  width: ${({ width }) => (width ? width : '138px')};
  height: 3rem;

  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: opacity(0.6);
  }
`
