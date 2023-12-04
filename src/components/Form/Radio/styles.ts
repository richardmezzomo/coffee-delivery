import styled from 'styled-components'

import { mixins } from '../../../styles/mixins'

export const Container = styled.label`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.COLORS['base-button']};
  color: ${({ theme }) => theme.COLORS['base-text']};
  text-transform: uppercase;
  ${mixins.fonts.buttonM};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.COLORS['purple-light']};
    border-color: ${({ theme }) => theme.COLORS.purple};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.purple};
  }
`
