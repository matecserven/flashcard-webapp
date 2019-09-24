import React from 'react';
import Score from '../Results/Score';

const ResultPage = (props) => (
  <div>
    <Score type={'Correct'} score={props.correct} />
    <Score type={'Incorrect'} score={props.incorrect} />
  </div>
)

export default ResultPage;
