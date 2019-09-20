export default function score(
  state = {
    correct: 0,
    incorrect: 0,
  }, action) {
  switch (action.type) {
    case 'UPDATE_CORRECT': {
      return {
        ...state,
        correct: state.correct + 1,
      };
    }

    case 'UPDATE_INCORRECT': {
      return {
        ...state,
        incorrect: state.incorrect + 1,
      };
    }

    default:
      return state;
  }
}
