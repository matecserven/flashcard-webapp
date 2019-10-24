import { combineReducers } from 'redux';
import score from './scoreReducer';
import answerResult from './answerResultReducer';
import questions from './questionReducer';

const rootReducer = combineReducers({
  score,
  answerResult,
  questions,
});

export default rootReducer;
