/*ENTRY POINT*/
/*ENTRY POINT*/
/*ENTRY POINT*/

import React from 'react';
import ReactDOM from 'react-dom';
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

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        {/*<Link to='/logout'>Logout</Link>*/}

        <Route exact path="/" component={App} />

        {/*<Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />*/}

      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
