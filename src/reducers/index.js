import { combineReducers } from 'redux';
import score from './scoreReducer';
import answerResult from './answerResultReducer';
import question from './questionReducer';

const rootReducer = combineReducers({
  score: score,
  answerResult: answerResult,
  question: question,
});

export default rootReducer;
