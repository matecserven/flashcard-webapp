import React, { useState } from 'react';
import Score from '../../components/Results/Score';

const ResultPage = (props) => {
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  return (
    <div>
      <div>
        <Score type={'Correct'} score={correct} />
        <Score type={'Incorrect'} score={wrong} />
      </div>
      <div>
        <button onClick={() => props.history.push('/multi')}>Go back</button>
      </div>
    </div>
  )
}

export default ResultPage;
