import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainHeader from './containers/MainHeader';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  		<MainHeader />
  </Provider>,
  document.getElementById('root')
);
