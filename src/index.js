import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import './index.css';

const store = createStore(reducer)

render(
      <Provider store={store}>
          <Router>
              <App />
          </Router>
      </Provider>
  )
