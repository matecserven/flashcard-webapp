import { combineReducers } from 'redux';
import score from 'reducers/scoreReducer';
import answerResult from 'reducers/answerResultReducer';
import questions from 'reducers/questionReducer';

const rootReducer = combineReducers({
  score,
  answerResult,
  questions,
});

export default rootReducer;
