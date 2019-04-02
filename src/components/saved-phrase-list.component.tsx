import React from 'react'
import styled from '@emotion/styled'

import {KanaType, Phrase} from "../types";
import {COLORS} from "../colors";

interface Props {
  savedPhrases: Phrase[]
  removePhrase: (phrase: Phrase) => void
  kanaType: KanaType
}

const Section = styled.section`
  padding: 20px 60px 60px;
`
const Heading = styled.h2`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: normal;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

const SavedPhrase = styled.div`
  width: calc(25% - 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  margin: 2rem 1rem;
`

const Kana = styled.span`
  display: inline-block;
  font-size: 2rem;
`
const Romaji = styled.span`
  font-weight: 300;
  color: ${COLORS.darkGreen};
`
const Delete = styled.button`
  background: ${COLORS.paleGreen};
  margin-top: 10px;
  border: radius: 4px;
`

export const SavedPhraseList = ({ savedPhrases, removePhrase, kanaType }: Props) => (
  <Section>
    <Heading>Saved Phrases</Heading>
    <Flex>
    {savedPhrases.map((phrase, i) => <SavedPhrase key={i}>
      <Kana>{phrase[kanaType]}</Kana>
      <Romaji>{phrase.romaji}</Romaji>
      <Delete type="button" onClick={() => removePhrase(phrase)}>Delete</Delete>
    </SavedPhrase>)}
    </Flex>
  </Section>
)
