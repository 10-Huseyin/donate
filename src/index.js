import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {Provider} from 'react-redux';
import {store} from './helpers';



//setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

