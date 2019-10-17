import React, { useState } from 'react';
import { withFirebase } from '../Firebase';

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
    firebase.addCard().add({
      question,
      answers,
      correct,
    });
  };

  return (
    <form onSubmit={submitForm}>
      <label>
        Question:
        <input type='text' onChange={handleQuestionChange} />
      </label>
      <div>
        <div>
          <label>
            Answer 1:
            <input type='text' name='a' onChange={handleAnswerChange} />
            <input
              type='radio'
              name='correctAnswer'
              value='a'
              checked={correct === 'a'}
              onChange={handleOptionChange}
            />
          </label>
        </div>
        <div>
          <label>
            Answer 2:
            <input type='text' name='b' onChange={handleAnswerChange} />
            <input
              type='radio'
              name='correctAnswer'
              value='b'
              checked={correct === 'b'}
              onChange={handleOptionChange}
            />
          </label>
        </div>
        <div>
          <label>
            Answer 3:
            <input type='text' name='c' onChange={handleAnswerChange} />
            <input
              type='radio'
              name='correctAnswer'
              value='c'
              checked={correct === 'c'}
              onChange={handleOptionChange}
            />
          </label>
        </div>
        <div>
          <label>
            Answer 4:
            <input type='text' name='d' onChange={handleAnswerChange} />
            <input
              type='radio'
              name='correctAnswer'
              value='d'
              checked={correct === 'd'}
              onChange={handleOptionChange}
            />
          </label>
        </div>
      </div>
      <input className='button is-primary' type='submit' value='Submit' />
    </form>
  );
};

const CardCreatorFormFirebase = withFirebase(CardCreatorForm);

export default CardCreatorFormFirebase;
