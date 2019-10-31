import React from 'react';
import Score from './Score';

const ResultPage = ({ correct, incorrect }) => (
  <div>
    <Score type={'Correct'} score={correct} />
    <Score type={'Incorrect'} score={incorrect} />
  </div>
);

export default ResultPage;
