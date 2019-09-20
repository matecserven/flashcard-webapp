import React from 'react';
import Score from '../Results/Score';

const ResultPage = (props) => {
  return (
    <div>
      <div>
        <Score type={'Correct'} score={props.correct} />
        <Score type={'Incorrect'} score={props.incorrect} />
      </div>
      <div>
        <button onClick={() => props.history.push('/multi')}>Go back</button>
      </div>
    </div>
  )
}

export default ResultPage;
