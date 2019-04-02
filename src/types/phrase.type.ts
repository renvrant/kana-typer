export type Phrase = {
  romaji: string;
  katakana: string;
  hiragana: string;
}

export const createPhrase = (phrase: Partial<Phrase> = {}): Phrase => ({
  romaji: '',
  katakana: '',
  hiragana: '',
  ...phrase,
})
