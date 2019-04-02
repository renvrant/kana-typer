import React from 'react'
import {KANA_TYPE} from "../types";
import styled from "@emotion/styled";
import {COLORS} from "../colors";

interface Props {
  toggleKana: () => void,
  kanaType: string
}

const Button = styled.button`
  border: none;
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`
export const Options = ({ toggleKana, kanaType }: Props) => (
  <div>
    <Button type="button" onClick={toggleKana}>
      Use { kanaType === KANA_TYPE.hiragana ? KANA_TYPE.katakana : KANA_TYPE.hiragana}
    </Button>
  </div>
)
