import React from 'react'

import {getSyllablesFromKana} from "../store/kana-to-syllables";
import {KanaSyllable} from "../types";

interface Props {
  kana: string
}

export const SyllablesRow = ({ kana = '' }: Props) => {
  const kanaSyllables: KanaSyllable[] = getSyllablesFromKana(kana)
  return (
    <div className="syllables">
      {kanaSyllables.map((char: KanaSyllable, i: number) =>
        <span key={i}>{char.syllable}</span>)
      }
    </div>
  )
}
