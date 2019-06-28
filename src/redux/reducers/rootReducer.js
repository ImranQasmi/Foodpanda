import { combineReducers } from 'redux';
import authReducer from './authReducer';
import searchReducer from './Searchreducer';
import customerReducer from './customerReducer';

const rootReducer = combineReducers({
    authReducer,
    searchReducer,
    customerReducer
})

export default rootReducer;