import app from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

const CARD_COLLECTION = 'cardCollection';
const MULTIPLE_ANSWERS = 'multipleAnswers';
const SINGLE_ANSWER = 'singleAnswer';

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.db = app.firestore();
  }

  getCards = (lang, type) =>
    this.db
      .collection(CARD_COLLECTION)
      .doc(lang)
      .collection(type)
      .get();

  addCard = (card, lang, type) => {
    let newCard = {};
    // eslint-disable-next-line
    for (let [key, value] of Object.entries(card)) {
      newCard[key] = value;
    }

    return this.db
      .collection(CARD_COLLECTION)
      .doc(lang)
      .collection(type)
      .add(newCard);
  };

  createNewCards = (cards, lang, type) => {
    Promise.all(cards.map((card) => this.addCard(card, lang, type)))
      .then(() => console.log('success'))
      .catch((e) => console.log(e));
  };
}

export default Firebase;
