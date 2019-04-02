import React, { useReducer, useEffect } from 'react';

import { DisplayKana } from "./components/display-kana.component";
import {initialAppState} from "./types";
import {appReducer, createLoadAction, createSaveAction, createUpdateCurrentPhraseAction} from "./store";
import {AboutSection} from "./components/about.component";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialAppState)

  useEffect(() => {
    dispatch(createLoadAction())
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void =>
    dispatch(createUpdateCurrentPhraseAction(e.target.value))

  return (
    <div className="App">
      <header>
        <h1>Kana Typer</h1>
      </header>
      <AboutSection />
      <DisplayKana kana={state.currentPhrase.hiragana}/>
      <input type="text" onInput={handleInput} value={state.currentPhrase.romaji} />
      <button type="button" onClick={() => dispatch(createSaveAction())}>Save Word</button>

      {state.saved.map((phrase, i) => <div key={i}>{phrase.hiragana} - {phrase.romaji}</div>)}
    </div>
  )
}

export default App;
