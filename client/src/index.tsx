import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store/store';

import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';


ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <Router>
        <App />
      </Router>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
