import { createGlobalStyle } from 'styled-components'
import { mixins } from './mixins'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.COLORS.background};
    color: ${({ theme }) => theme.COLORS['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    ${mixins.fonts.textM};
  }

  button {
    border: none;
    cursor: pointer;
  }
`
