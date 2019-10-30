import switchCaseFunc from 'utils/switchcase';

const initalState = {
  cards: {},
  currentQuestion: null,
};

const questions = (state = initalState, action) =>
  switchCaseFunc({
    UPDATE_CURRENT_QUESTION: () => {
      return {
        ...state,
        currentQuestion: action.payload,
      };
    },
    GET_CARDS: () => {
      return {
        ...state,
        cards: action.payload,
      };
    },
    GET_CARDS_FAILED: () => {
      return {
        ...state,
        error: action.error,
      };
    },
  })(state)(action.type);

export default questions;
