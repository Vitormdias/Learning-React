import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import { rootEpic } from './epics/root';

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

const appWithProvider = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(appWithProvider, document.getElementById('root'));