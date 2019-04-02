import { toHiragana, toKatakana } from 'wanakana'

import {Action, AppState, createPhrase, initialAppState, Phrase} from "../types"
import {SAVE_PHRASE, LOAD_PHRASES, CHANGE_FONT, CHANGE_KANA, UPDATE_CURRENT_PHRASE, CLEAR_PHRASES, REMOVE_PHRASE} from "./app.actions"
import { savePhrases, getSavedPhrases } from "./storage.service"

export function appReducer(state: AppState = initialAppState, action: Action<any>): AppState {
  switch (action.type) {
    case UPDATE_CURRENT_PHRASE:
      // Change Ls to Rs for better support
      const val = action.payload.replace(/l/g, 'r')
      return {
        ...state,
        currentPhrase: createPhrase({
          romaji: action.payload, // Don't modify source phrase
          hiragana: toHiragana(val).replace(/[a-z]/g, ''),
          katakana: toKatakana(val).replace(/[a-z]/g, ''),
        })
      }
    case SAVE_PHRASE:
      const savedPhrases: Phrase[] = [...state.saved, state.currentPhrase]
      savePhrases(savedPhrases)
      return { ...state, currentPhrase: createPhrase(), saved: getSavedPhrases() }
    case REMOVE_PHRASE:
      savePhrases(state.saved.filter(phrase => action.payload !== phrase))
      return { ...state, saved: getSavedPhrases() }
    case LOAD_PHRASES:
      return { ...state, saved: getSavedPhrases() }
    case CLEAR_PHRASES:
      savePhrases([])
      return { ...state, saved: getSavedPhrases() }
    case CHANGE_FONT:
      return { ...state, font: action.payload }
    case CHANGE_KANA:
      return { ...state, kanaType: action.payload }
    default:
      return state
  }
}
