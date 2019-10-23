import React, { useState } from 'react';
import CardAnswer from './CardAnswer';
import { withFirebase } from 'components/Firebase';
import { take } from 'lodash';

const CardCreatorForm = ({ firebase }) => {
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState({});
  const [correct, setCorrect] = useState();

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };
  const handleAnswerChange = (event) => {
    setAnswers({ ...answers, [event.target.name]: event.target.value });
  };

  const handleOptionChange = (event) => {
    setCorrect(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(question, answers, correct);
    firebase.addCard({
      question,
      answers,
      correct,
    });
  };

  const appendAnswers = (amount) => {
    const letters = ['a', 'b', 'c', 'd'];
    return take(letters, amount).map((letter) => (
      <CardAnswer
        key={letter}
        letter={letter}
        correct={correct}
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
