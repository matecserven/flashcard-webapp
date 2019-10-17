import store from '../store/configureStore';
import { getCards } from '../actions/actions';

export const getCardsThunk = () => {

  store.dispatch(getCards(data));
}
