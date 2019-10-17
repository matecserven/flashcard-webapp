export default function questions(
  state = {
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

    default:
      return state;
  }
}
