import {Action, createAction, FontClass, KanaType, Phrase } from "../types";

export const UPDATE_CURRENT_PHRASE = 'KT--UPDATE_CURRENT_PHRASE'

export const SAVE_PHRASE = 'KT--SAVE_PHRASE'
export const LOAD_PHRASES = 'KT--LOAD_PHRASES'
export const CLEAR_PHRASES = 'KT--CLEAR_PHRASES'
export const REMOVE_PHRASE = 'KT--REMOVE_PHRASE'

export const CHANGE_FONT = 'KT--CHANGE_FONT'
export const CHANGE_KANA = 'KT--CHANGE_KANA'



export const createUpdateCurrentPhraseAction = (payload: string): Action<string> =>
  createAction<string>(UPDATE_CURRENT_PHRASE, payload)

export const createSaveAction = (): Action<null> =>
  createAction<null>(SAVE_PHRASE)

export const createLoadAction = (): Action<null> =>
  createAction<null>(LOAD_PHRASES)

export const createClearPhrases = (): Action<null> =>
  createAction<null>(CLEAR_PHRASES)

export const createRemovePhrase = (payload: Phrase): Action<Phrase> =>
  createAction<Phrase>(REMOVE_PHRASE, payload)

export const createChangeFontAction = (payload: FontClass): Action<FontClass> =>
  createAction<FontClass>(CHANGE_FONT, payload)

export const createChangeKanaAction = (): Action<null> =>
  createAction<null>(CHANGE_KANA)
