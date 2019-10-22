import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {loadState, saveState} from './storage';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import productoReducer from './reductores/productoReducer';

const store = createStore(productoReducer,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe( function () {
    saveState(store.getState())
  })
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
