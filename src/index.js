import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import reducers from './reducers';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import Register from './containers/Register';
import Login from './containers/Login';
import Logout from './containers/Logout';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider>
    <Router>
      <div>
        <Link to='/logout'>Logout</Link>

        <Route exact path='/' component={App}/>
        <Route path='/login' component={Login}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/register' component={Register}/>

      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();


