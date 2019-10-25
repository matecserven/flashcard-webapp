import {
  getCards,
  updateCurrentQuestion,
  getCardsFailed,
} from 'actions/actions';
import { randomCard } from 'utils/randomizer';

export const getCardsThunk = (firebase) => async (dispatch) => {
  let dataObj = {};
  try {
    let data = await firebase.getCards('java', 'multipleAnswers');
    data.docs.forEach((card) => (dataObj[card.id] = card.data()));
    dispatch(getCards(dataObj));
    dispatch(updateCurrentQuestion(randomCard(null, Object.keys(dataObj))));
  } catch (error) {
    dispatch(getCardsFailed(error));
  }
};
