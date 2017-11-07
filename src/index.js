/*ENTRY POINT*/
/*ENTRY POINT*/
/*ENTRY POINT*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/reducer_index';*/

import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

registerServiceWorker();
