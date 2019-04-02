import {createPhrase, Phrase} from "./phrase.type";
import {KANA_TYPE, KanaType} from "./kana.type";
import {FONT_CLASS, FontClass} from "./font.type";

export type AppState = {
  saved: Phrase[]
  kanaType: KanaType
  currentPhrase: Phrase
  font: FontClass
}

export const initialAppState: AppState = {
  saved: [],
  kanaType: KANA_TYPE.hiragana,
  currentPhrase: createPhrase(),
  font: FONT_CLASS.sans
}
