import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.COLORS['base-card']};
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 0.375rem 2.25rem;
`
export const CoffeeImage = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`

export const Tags = styled.span`
  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  margin-top: 0.75rem;

  span {
    background: ${({ theme }) => theme.COLORS['yellow-light']};
    color: ${({ theme }) => theme.COLORS['yellow-dark']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    text-transform: uppercase;
    ${mixins.fonts.tag}
  }
`

export const Title = styled.h3`
  margin-top: 1rem;
  ${mixins.fonts.titleXS}
`
export const Description = styled.p`
  margin: 0.5rem 0 2rem;
  padding: 0 1.25rem;
  ${mixins.fonts.textS}
  color: ${({ theme }) => theme.COLORS['base-label']};
`

export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem 1.25rem;
`
export const Price = styled.span`
  display: flex;
  align-items: baseline;
  gap: 2px;
  span:first-child {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.COLORS['base-text']};
  }

  span:last-child {
    ${mixins.fonts.titleM};
    color: ${({ theme }) => theme.COLORS['base-text']};
  }
`
export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme.COLORS['yellow-dark'] : theme.COLORS['purple-dark']};
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 8px;
    display: flex;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.COLORS.yellow : theme.COLORS.purple};
    }
  }
`
export const QuantityContainer = styled.div`
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
