import store from '../store/configureStore';
import { getCards, updateCurrentQuestion } from '../actions/actions';
import { randomCard } from '../utils/randomizer';

export const getCardsThunk = async (firebase) => {
  return await firebase
    .getCards()
    .get()
    .then((result) => {
      let dataObj = {};
      result.docs.forEach((card) => (dataObj[card.id] = card.data()));
      store.dispatch(getCards(dataObj));
      store.dispatch(
        updateCurrentQuestion(randomCard(null, Object.keys(dataObj))),
      );
      return dataObj;
    });
};
