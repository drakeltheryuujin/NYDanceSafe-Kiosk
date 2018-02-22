import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import appReducer from './reducers/index';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';

const middleware = 	applyMiddleware( thunk );

const store = createStore(
	appReducer,
	compose(
		middleware,
		window.devToolsExtension ? window.devToolsExtension() : ( f ) => f
	)
);


ReactDOM.render(

  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
 document.getElementById('root')
);

registerServiceWorker();

// Object {}dispatch: (action)getState: getState()replaceReducer: replaceReducer(nextReducer)subscribe: subscribe(listener)Symbol(observable): observable()__proto__: Object

