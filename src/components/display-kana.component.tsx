import React from 'react'

import {SyllablesRow} from "./syllables-row.component";

interface Props {
  kana: string
}
export const DisplayKana = ({ kana = '' }: Props) => {
  return (
    <div className="flex-row">
      <h1>
        {kana}
        <SyllablesRow kana={kana}/>
      </h1>
    </div>
  )
}

