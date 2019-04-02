import { toKatakana, toRomaji } from "wanakana";

import { KanaSyllable } from '../types'

// There's only so many of these and wanakana doesn't expose its dictionary
// So, hardcode it in hira and combine with kata
const smallHira = [ 'ゃ', 'ゅ', 'ょ', 'ぃ', 'ぇ', 'ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ']
const SMALL_KANA: string[] = [
  ...smallHira,
  ...smallHira.map(hira => toKatakana(hira))
]
const SUKUON = 'っ'

const transformSukuon = (kana: string): string[] =>
  kana.split('')
  .reduce((result: string[], char: string, i: number, src: string[]): string[] => {
    if (char === SUKUON) {
      // combine the next character with the sukuon
      const sukoChar = `${char}${result[i+1]}`
      // delete the next character from the source array
      // add the sukuon combination in place
      src.splice(i+1, 1, )
      src.splice(i, 1, sukoChar)
      // replace the current array with the modified source array so the next character is skipped
      return src
    }
    return result
  }, kana.split(''))

const transformSmallKana = (kanaArray: string[]): string[] =>
  kanaArray.reduce((result: string[], char: string, i: number): string[] => {
    if (SMALL_KANA.find((v: string) => v === char)) {
      const yoOnChar = `${result[i-1]}${char}`
      result.splice(i-1, 2, yoOnChar)
    }
    return result
  }, kanaArray)

const transformKana = (kana: string): string[] =>
  transformSmallKana(transformSukuon(kana))

export const getSyllablesFromKana = (kanaPhrase: string = ''): KanaSyllable[] =>
  transformKana(kanaPhrase.trim()).map(kana => ({
    kana,
    syllable: toRomaji(kana)
  })) || []
