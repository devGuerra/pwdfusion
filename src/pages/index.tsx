import { Copy } from "phosphor-react";
import 'rc-slider/assets/index.css';
import { useState } from "react";
import { useTheme } from "styled-components";
import { generatePassword } from "../utils/generatePassword";


import { CheckBox, GenerateButton, GeneratorBody, GeneratorBox, GeneratorContainer, GeneratorHeader, HomeContainer, LengthText, Option, Range, RowLength, StrengthContainer, Text, Title } from "./styles";

export default function Home() {
  const theme = useTheme();
  const [range, setRange] = useState(8);

  const [newPassword, setNewPassword] = useState('');
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);

  function handleNewPassword() {
    const password = generatePassword({
      length: range,
      hasNumbers,
      hasSymbols,
      hasUppercase
    });
    setNewPassword(password);
    // navigator.clipboard.writeText(password);

  }

  return (
    <HomeContainer>
      <GeneratorContainer>
        <GeneratorBox>
          <Title>Password Generator</Title>
          <GeneratorHeader>
            <input value={newPassword} disabled />
            <button title="Copiar">
              <Copy size={24} color={theme['gray-300']} weight='bold' />
            </button>
          </GeneratorHeader>
          <GeneratorBody>
            <RowLength>

              <Text>Password Generator</Text>
              <LengthText>{range}</LengthText>
            </RowLength>
            <Range
              value={range}
              onChange={(val) => setRange(val as number)}
              max={20}
              min={5}
            />

            <Option>
              <CheckBox type='checkbox' checked={hasUppercase} onChange={() => setHasUppercase(state => !state)} />
              <Text>Include Uppercase Letters</Text>
            </Option>
            <Option>
              <CheckBox type='checkbox' checked={hasNumbers} onChange={() => setHasNumbers(state => !state)} />
              <Text>Include Numbers</Text>
            </Option>
            <Option>
              <CheckBox type='checkbox' checked={hasSymbols} onChange={() => setHasSymbols(state => !state)} />
              <Text>Include Symbols</Text>
            </Option>

            <StrengthContainer>
              <Text>Strength</Text>

            </StrengthContainer>

            <GenerateButton onClick={handleNewPassword}>
              <span > Generate
              </span>

            </GenerateButton>
          </GeneratorBody>
        </GeneratorBox>
      </GeneratorContainer>
    </HomeContainer>
  )
}
