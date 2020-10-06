import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Worksheet from './Worksheet';
import * as serviceWorker from './serviceWorker';
import WordStore from "./WordStore";


function newWordStore() {
    try {
        const saveData = window.localStorage.getItem('wcw_words');
        const initialWordsData = JSON.parse(saveData);
        return new WordStore(initialWordsData);
    } catch(err) {
        console.log('Error restoring:', err);
        return new WordStore();
    }
}

const wordStore = newWordStore();

wordStore.addEventListener('dataChanged', () => {
    const saveData = JSON.stringify(wordStore.words);
    window.localStorage.setItem('wcw_words', saveData);
});


ReactDOM.render(
  <React.StrictMode>
    <Worksheet model={wordStore} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
