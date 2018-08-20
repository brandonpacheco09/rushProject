import {combineReducers} from 'redux';
import env from './envReducer';

const rootReducer = combineReducers({
    env,
});

export default rootReducer;