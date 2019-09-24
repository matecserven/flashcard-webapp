import React from 'react';
import TileSetCont from '../containers/Score/TileSetCont';
import ResultCont from '../containers/Score/ResultCont';
import { randomMulti } from '../utils/randomizer';

const MultiAnswersPage = (props) => {
  const handleClick = () => {
    props.updateCurrentQuestion((randomMulti(props.currentQuestion)));
    props.updateChosenAnswer('');
  }

  return (
    <div className='homePage'>
      <ResultCont />
      <TileSetCont current={props.currentQuestion} />
      <div>
        <button className='button is-primary' onClick={handleClick}>Next question</button>
        <button className='button is-primary' onClick={() => props.history.push('/')}>Go back</button>
      </div>
    </div>
  );
}

export default MultiAnswersPage;
