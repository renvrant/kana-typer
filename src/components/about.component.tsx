import React from 'react'

export const AboutSection = () => (
  <section>
    <p>Type in romaji to instantly see the results in hiragana or katakana. Save your word and start building up a reference list.</p>
    <p>
      Kana Typer is a tool for helping you learn the basics of hiragana and katakana.
      It isn't a translator, so the results won't always be accurate to how words should be written.
      Therefore, it's best to use with words you already know the correct romaji for.
      It supports both <a href="https://en.wikipedia.org/wiki/Romanization_of_Japanese" target="_blank">Hepburn and Kunrei-shiki romanization</a>, but syllables will be shown using the Hepburn system.
      Characters that can't be matched to any kana won't be shown at all (for example, single consonants).
      Kana Typer is powered by <a href="https://github.com/WaniKani/WanaKana" target="_blank">WanaKana</a>.
    </p>
  </section>
)
