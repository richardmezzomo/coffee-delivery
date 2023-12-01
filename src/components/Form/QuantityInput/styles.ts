import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS['base-button']};
  border-radius: 0.375rem;

  display: flex;
  gap: 0.25rem;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${({ theme }) => theme.COLORS.purple};

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.COLORS['purple-dark']};
    }
  }

  span {
    padding-top: 2px;
    color: ${({ theme }) => theme.COLORS['base-title']};
  }
`
