import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import actions from './redux/actions';

import 'modern-normalize';
import './styles.scss';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
