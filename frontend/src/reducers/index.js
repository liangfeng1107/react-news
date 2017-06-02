import { combineReducers } from 'redux';
import getNewsReducer from './reducers';

const rootReducer = combineReducers({
  getNewsReducer
});

export default rootReducer;
