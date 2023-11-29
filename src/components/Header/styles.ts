import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  max-width: 1160px;
  padding: 2rem 1.25rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Aside = styled.aside`
  display: flex;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    background: ${({ theme }) => theme.COLORS['purple-light']};

    svg {
      color: ${({ theme }) => theme.COLORS.purple};
    }

    span {
      color: ${({ theme }) => theme.COLORS['purple-dark']};
    }

    padding: 0.5rem;
    border-radius: 6px;
  }

  a {
    display: flex;
    align-items: center;

    background: ${({ theme }) => theme.COLORS['yellow-light']};
    color: ${({ theme }) => theme.COLORS['yellow-dark']};
    border-radius: 6px;
    padding: 0.5rem;
  }
`
