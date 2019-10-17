import jsonData from '../assets/javaCardsMulti.json';
import jsonDataSingle from '../assets/javaCardsRegular.json';

export const randomMulti = (current, type) => {
  let rolled = current;
  const file = type.match('multi') ? jsonData : jsonDataSingle;
  while (rolled === current) {
    rolled = Math.floor(Math.random() * Object.keys(file).length) + 1;
  }
  return rolled;
};
