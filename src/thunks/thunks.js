import store from '../store/configureStore';
import { updateCurrentQuestion, updateChosenAnswer } from '../actions/actions';

export const updateCurrentQuestionThunk = () =>
  store.dispatch(updateCurrentQuestion);
