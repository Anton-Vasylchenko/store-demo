import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './components/App';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

ReactDOM.render(
  <Router>
    <ErrorBoundary>

      <ScrollToTop>
        <App />
      </ScrollToTop>

    </ErrorBoundary>
  </Router >,
  document.getElementById('root')
);

