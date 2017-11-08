/*ENTRY POINT*/
/*ENTRY POINT*/
/*ENTRY POINT*/

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  Browser as Router,
  Route,
  Link
} from 'react-router-dom';
import reducers from './reducers';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/reducer_index';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import NewItemForm from './containers/NewItem/newItemForm';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
);

ReactDOM.render(

  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={App}/>
        <Route path='/login' component={Login}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/register' componen={Register}/>

      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
