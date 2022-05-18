import styled from 'styled-components'

export const ButtonCustom = styled.button`
  font-size: 1rem;
  color: #fff;
  background-color: var(--blue-light);
  border: 0;
  padding: 0 2rem;
  height: 3rem;

  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: opacity(0.6);
  }
`
