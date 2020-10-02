import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Worksheet from './Worksheet';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Worksheet />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
