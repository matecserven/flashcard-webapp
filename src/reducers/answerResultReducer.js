const answerResult = (
  state = {
    chosenAnswer: '',
  },
  action,
) => {
  switch (action.type) {
    case 'UPDATE_CHOSEN_ANSWER': {
      return {
        ...state,
        chosenAnswer: action.payload,
      };
    }

    default:
      return state;
  }
};

export default answerResult;
