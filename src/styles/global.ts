import { createGlobalStyle } from 'styled-components'



export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: none;
  }

  body {
    background: ${(props) => props.theme['blue-900']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased
  }

  body, input,  textarea, button {
    font-weight: 400;
    font-size: 1rem;
    font-family: 'Miriam Libre', sans-serif;
  }

`
