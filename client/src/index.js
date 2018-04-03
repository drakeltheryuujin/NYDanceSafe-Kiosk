import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import appReducer from './reducers/index';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(appReducer);

ReactDOM.render(

  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
 document.getElementById('root')
);

registerServiceWorker();
