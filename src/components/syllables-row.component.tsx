import React from 'react'
import styled from "@emotion/styled";

import {getSyllablesFromKana} from "../store/kana-to-syllables";
import {KanaSyllable} from "../types";
import {COLORS} from '../colors';

interface Props {
  kana: string
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 0.25em;
  font-weight: normal;
  width: 100%;
  color: ${COLORS.darkGreen};
  font-weight: 300;
`

export const SyllablesRow = ({ kana = '' }: Props) => {
  const kanaSyllables: KanaSyllable[] = getSyllablesFromKana(kana)
  return (
    <Row>
      {kanaSyllables.map((char: KanaSyllable, i: number) =>
        <span key={i}>{char.syllable}</span>)
      }
    </Row>
  )
}
