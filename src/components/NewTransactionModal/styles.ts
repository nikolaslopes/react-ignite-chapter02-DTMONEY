import styled from 'styled-components'

export const Content = styled.div`
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;

    transition: all 0.2s ease;

    &:hover {
      filter: brightness(0.8);
    }
  }
`

export const Form = styled.form`
  h2 {
    color: var(--text-title);
    margin-bottom: 2rem;
  }

  button[type='submit'] {
    margin-top: 1.5rem;
  }
`
