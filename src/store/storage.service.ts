import { Phrase } from '../types/phrase.type';

const LOCALSTORAGE = window.localStorage
const SAVED_PHRASE_KEY = 'kt-savedPhrases'

const setLocalStorage = (key: string, value: string): void => LOCALSTORAGE.setItem(key, value)
const getLocalStorage = (key: string): string | null => LOCALSTORAGE.getItem(key)

export const savePhrases = (phrases: Phrase[]): void =>
  setLocalStorage(SAVED_PHRASE_KEY, JSON.stringify(phrases))

export const getSavedPhrases = (): Phrase[] => {
  const phrases = getLocalStorage(SAVED_PHRASE_KEY)
  return phrases ? JSON.parse(phrases) : []
}
