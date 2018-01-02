import { combineReducers } from 'redux';
import weather from './weather'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  weather
});

export default rootReducer;
