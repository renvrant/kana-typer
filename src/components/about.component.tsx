import React from 'react'
import styled from '@emotion/styled'

import {COLORS} from "../colors";

const Section = styled.section`
  padding: 20px 60px 30px;
  background: ${COLORS.paleGreen};
  display: flex;
  flex-direction: column;
  align-items: center;
  
  a {
    color: ${ COLORS.darkGreen };
    &:hover { color: black }
  }
`

const Description = styled.p`
  max-width: 800px;
`

const Notes = styled.p`
  max-width: 800px;
  font-size: 0.8rem;
`

export const AboutSection = () => (
  <Section>
    <Description>
      Type a word or phrase in romaji to instantly see the results in hiragana or katakana.
      Save your word and start building up a reference list.
      {/*Change the kana font to get comfortable with many styles.*/}
    </Description>
    <Notes>
      Kana Typer is a tool for helping you learn the basics of hiragana and katakana.
      It isn't a translator, so the results won't always be accurate to how words should be written.
      Therefore, it's best used with words that you already know the correct romanization for.
      It supports both <a href="https://en.wikipedia.org/wiki/Romanization_of_Japanese" target="_blank">Hepburn and Kunrei-shiki romanization</a>, but syllables will be shown using the Hepburn system.
      Roman characters that can't be matched to any kana won't be shown at all (for example, single consonants).
      Kana Typer is powered by <a href="https://github.com/WaniKani/WanaKana" target="_blank">WanaKana</a>.
    </Notes>
  </Section>
)
