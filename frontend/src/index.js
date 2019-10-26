import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { save, load } from "redux-localstorage-simple";
import { applyMiddleware,createStore } from 'redux';
import { Provider } from 'react-redux';
import productoReducer from './reductores/productoReducer';

const createStoreWithMiddleware 
    = applyMiddleware(
        save() // Saving done here
    )(createStore)

const store = createStoreWithMiddleware(
  productoReducer,    
      load() // Loading done here    
)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
