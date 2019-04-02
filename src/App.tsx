import React, { useReducer, useEffect } from 'react';

import {initialAppState, Phrase} from "./types";
import {
  appReducer, createChangeKanaAction,
  createLoadAction,
  createRemovePhrase,
  createSaveAction,
  createUpdateCurrentPhraseAction
} from "./store";
import {
  AboutSection,
  SyllablesRow,
  Options,
  KanaDisplay,
  SavedPhraseList,
  MainInput,
  TopBar
} from "./components";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialAppState)

  useEffect(() => {
    dispatch(createLoadAction())
  }, []);

  const getKana = () => state.currentPhrase[state.kanaType]
  console.log(state)

  return (
    <div className="App">
      <TopBar>
        <Options kanaType={state.kanaType}
                 toggleKana={() => dispatch(createChangeKanaAction())}
        />
      </TopBar>
      <main>

        <KanaDisplay>
          <SyllablesRow kana={getKana()} />
          {getKana()}
        </KanaDisplay>

        <MainInput value={state.currentPhrase.romaji}
                   onSave={() => dispatch(createSaveAction())}
                   onInput={(val: string) => dispatch(createUpdateCurrentPhraseAction(val))}
        />

        <AboutSection />

        <SavedPhraseList savedPhrases={state.saved}
                         kanaType={state.kanaType}
                         removePhrase={(phrase: Phrase) => dispatch(createRemovePhrase(phrase))}
        />
      </main>
    </div>
  )
}

export default App;
