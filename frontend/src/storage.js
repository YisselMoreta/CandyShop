import { save, load } from "redux-localstorage-simple";
import { createStore,applyMiddleware, compose } from 'redux';
import productoReducer from './reductores/productoReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware 
    = applyMiddleware(
        save() // Saving done here
    )(createStore)

const store = createStoreWithMiddleware(
  productoReducer,    
      load({
        preloadedState:{
          state:[]
        }
    }), // Loading done here   
    composeEnhancers(), 
);
export default store;