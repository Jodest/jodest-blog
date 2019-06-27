import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store/store';

import App from './components/App';
// import ErrorBoundry from './components/error-boundry';

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      {/* <ErrorBoundry> */}
        <Router>
          <App />
        </Router>
      {/* </ErrorBoundry> */}
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);
