import React, { useState } from 'react';
import CardAnswer from './CardAnswer';
import { withFirebase } from 'components/Firebase';
import { take } from 'lodash';

const CardCreatorForm = ({ firebase }) => {
  const [card, setCard] = useState({});

  const handleQuestionChange = (event) => {
    setCard({ ...card, question: event.target.value });
  };

  const handleAnswerChange = (event) => {
    setCard({
      ...card,
      answers: {
        ...card.answers,
        [event.target.name]: event.target.value,
      },
    });
    console.log(card);
  };

  const handleOptionChange = (event) => {
    setCard({ ...card, correct: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (Object.keys(card.answers).length > 1) {
      firebase.addCard(
        {
          question: card.question,
          asnwers: card.answers,
          correct: card.correct,
        },
        'java',
        'multipleAnswers',
      );
    } else {
      firebase.addCard(
        {
          question: card.question,
          answer: card.answers['a'],
        },
        'java',
        'singleAnswer',
      );
    }
  };

  const appendAnswers = (amount) => {
    const letters = ['a', 'b', 'c', 'd'];
    return take(letters, amount).map((letter) => (
      <CardAnswer
        key={letter}
        letter={letter}
        correct={card.correct}
        handleAnswerChange={handleAnswerChange}
        handleOptionChange={handleOptionChange}
      />
    ));
  };

  return (
    <form onSubmit={submitForm} className='column'>
      <div className='field'>
        <label className='field-label is-size-1'>Question:</label>
        <input className='input' type='text' onChange={handleQuestionChange} />
      </div>
      <div>{appendAnswers(4)}</div>
      <input className='button is-primary' type='submit' value='Submit' />
    </form>
  );
};

const CardCreatorFormFirebase = withFirebase(CardCreatorForm);

export default CardCreatorFormFirebase;
