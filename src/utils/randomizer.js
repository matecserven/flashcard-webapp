import jsonData from '../assets/javaCardsMulti.json';

export const randomMulti = (current) => {
  let rolled = current;
  while (rolled === current) {
    rolled = Math.floor(Math.random() * Object.keys(jsonData).length) + 1;
  }
  return rolled;
}
