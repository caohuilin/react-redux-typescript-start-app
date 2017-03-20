import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/containers/App/index';
import configureStore from './app/store/configureStore';
import { Router, Route, browserHistory } from 'react-router';

import './index.less';
const store: any = configureStore({});

ReactDOM.render(
  <Provider store={store}>
     <Router history={browserHistory}>
        <Route path='/' component={App} />
     </Router>
  </Provider>,
  document.getElementById('root')
);
