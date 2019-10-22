import { getCards, updateCurrentQuestion } from '../actions/actions';
import { randomCard } from '../utils/randomizer';

export const getCardsThunk = (firebase) => (dispatch) => {
  firebase
    .getCards('Java')
    .get()
    .then((result) => {
      let dataObj = {};
      result.docs.forEach((card) => (dataObj[card.id] = card.data()));
      dispatch(getCards(dataObj));
      dispatch(updateCurrentQuestion(randomCard(null, Object.keys(dataObj))));
    });
};
