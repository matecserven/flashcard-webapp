import React from 'react';
import MultiAnswersPageCont from '../containers/Score/MultiAnswersPageCont';
import ResultCont from '../containers/Score/ResultCont';
import FooterNav from './Navigation/FooterNav';
import { randomMulti } from '../utils/randomizer';

const MultiTileSet = (props) => {
  const handleClick = () => {
    props.updateCurrentQuestion(randomMulti(props.currentQuestion, 'multi'));
    props.updateChosenAnswer('');
  };

  return (
    <div className='homePage'>
      <ResultCont />
      <MultiAnswersPageCont current={props.currentQuestion} />
      <FooterNav onClick={handleClick} />
    </div>
  );
};

export default MultiTileSet;
