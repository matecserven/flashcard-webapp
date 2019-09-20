import { combineReducers } from 'redux';
import score from './scoreReducer';

const rootReducer = combineReducers({
  score: score,
})

export default rootReducer;
