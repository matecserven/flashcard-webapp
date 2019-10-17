export default function questions(
  state = {
    cards: {},
    currentQuestion: 1,
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
