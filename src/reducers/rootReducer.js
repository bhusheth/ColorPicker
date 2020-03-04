import { combineReducers } from 'redux';
import colorReducer from './colorReducer';

const rootReducer = combineReducers({
    colors: colorReducer
})

export default rootReducer;