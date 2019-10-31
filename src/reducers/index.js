import { combineReducers } from 'redux';
import score from 'reducers/scoreReducer';
import answerResult from 'reducers/answerResultReducer';
import cards from 'reducers/cardsReducer';

const rootReducer = combineReducers({
  score,
  answerResult,
  cards,
});

export default rootReducer;
