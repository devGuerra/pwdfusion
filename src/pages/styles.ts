import Slider from 'rc-slider';
import styled from "styled-components";
import { defaultTheme } from '../styles/theme';



export const HomeContainer = styled.div``

export const GeneratorContainer = styled.div`
  height: calc(100vh - 2rem);
  width: 100%;
  margin-top: 2rem;

  justify-content: center;
  display: flex;
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`

export const GeneratorBox = styled.div`
  width: 28rem;
  height: 36rem;
`

export const GeneratorHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0  1.5rem;

  height: 4.5rem;
  background: ${(props) => props.theme['gray-600']};
  margin-bottom: 1rem;

  input {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme['gray-300']};
    font-size: 1.5rem;
    font-weight: bold;
  }

  button {
    background: transparent;
    border: 0;
    height: 2rem;
    width: 2rem;
    
    &:hover {
      cursor: pointer;
    }
  }
`

export const GeneratedPassword = styled.input`
  font-weight: bold;
`

export const GeneratorBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 31.5rem;
  padding: 1.5rem;
  
  background: ${(props) => props.theme['gray-600']};
`

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 700;
`

export const RowLength = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LengthText = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme['green-100']};
`

export const Range = styled(Slider).attrs({
  trackStyle: { backgroundColor: defaultTheme['green-100'] },
  railStyle: { backgroundColor: defaultTheme['blue-500'] },
  handleStyle: { background: defaultTheme['green-100'], height: 24, width: 24, marginTop: -10, opacity: 1, border: 0 },
})`
  margin: 1rem 0 2rem ;

`

export const CheckBox = styled.input.attrs({
  type: 'checkbox'
})`
  height: 1.5rem;
  width: 1.5rem;
  border: 0;
`

export const Option = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1rem;
`

export const StrengthContainer = styled.div`
  display: flex;
  height: 3.75rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  background: ${(props) => props.theme['blue-900']};
`

export const GenerateButton = styled.button`
  
  --button_outline_color: #000000;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.75em;
  background: ${(props) => props.theme['blue-900']};
  margin-top: 2rem;

  &:hover span {
    cursor: pointer;
    transform: translateY(-0.33em);
  }

  &:active span {
    transform: translateY(0);
  }

  span {
    display: block;
    box-sizing: border-box;
    border: 2px solid ${(props) => props.theme['blue-900']};
    border-radius: 0.75em;
    padding: 0.75em 1.5em;
    background: ${(props) => props.theme['green-100']};
    color: ${(props) => props.theme['blue-900']};
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
  }
`