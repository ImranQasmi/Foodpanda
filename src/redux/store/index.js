import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import { saveState, loadState} from './localStorage';

const persistedState = loadState();

const store = createStore( rootReducer, persistedState, applyMiddleware(thunk, logger));

store.subscribe(() =>{
    saveState(store.getState());
})

export default store;