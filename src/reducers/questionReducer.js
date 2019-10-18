export default function questions(
  state = {
    cards: {},
    currentQuestion: null,
  },
  action,
) {
  switch (action.type) {
    case 'UPDATE_CURRENT_QUESTION': {
      return {
        ...state,
        currentQuestion: action.payload,
      };
    }

    case 'GET_CARDS': {
      return {
        ...state,
        cards: action.payload,
      };
    }

    default:
      return state;
  }
}
