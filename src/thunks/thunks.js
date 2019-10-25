import { getCards, updateCurrentQuestion } from 'actions/actions';
import { randomCard } from 'utils/randomizer';

export const getCardsThunk = (firebase) => async (dispatch) => {
  let data = await firebase.getCards('Java');
  let dataObj = {};
  data.docs.forEach((card) => (dataObj[card.id] = card.data()));
  dispatch(getCards(dataObj));
  dispatch(updateCurrentQuestion(randomCard(null, Object.keys(dataObj))));
};
