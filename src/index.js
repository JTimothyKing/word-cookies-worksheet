import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Worksheet from './Worksheet';
import * as serviceWorker from './serviceWorker';
import WordStore from "./WordStore";

ReactDOM.render(
  <React.StrictMode>
    <Worksheet model={new WordStore()} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
