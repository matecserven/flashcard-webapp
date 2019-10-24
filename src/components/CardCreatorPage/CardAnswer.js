import React from 'react';

const CardAnswer = ({
  letter,
  handleAnswerChange,
  handleOptionChange,
  correct,
}) => {
  return (
    <div className='field'>
      <label className='field-label is-size-4'>
        Answer {letter.toUpperCase()}:
      </label>
      <div className='field'>
        <div className='control'>
          <input
            className='input'
            type='text'
            name={letter}
            onChange={handleAnswerChange}
          />
        </div>
        <div className='field'>
          <label className='field-label'>Is this the correct?</label>
          <div className='radio'>
            <input
              className='control'
              type='radio'
              name='correctAnswer'
              value={letter}
              checked={correct === letter}
              onChange={handleOptionChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAnswer;
