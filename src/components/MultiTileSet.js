import React, { useEffect } from 'react';
import MultiAnswersPageCont from '../containers/MultiAnswersPageCont';
import ResultCont from '../containers/ResultCont';
import FooterNav from './Navigation/FooterNav';
import { getCardsThunk } from '../thunks/thunks';
import { randomCard } from '../utils/randomizer';

const MultiTileSet = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      await getCardsThunk(props.firebase);
    };
    fetchData();
  }, []);

  const handleClick = () => {
    props.updateCurrentQuestion(
      randomCard(props.currentQuestion, Object.keys(props.cards)),
    );
    props.updateChosenAnswer('');
  };

  return (
    <div className='homePage'>
      <ResultCont />
      {!props.currentQuestion ? (
        <div>Loading...</div>
      ) : (
        <MultiAnswersPageCont current={props.currentQuestion} />
      )}
      <FooterNav onClick={handleClick} />
    </div>
  );
};

export default MultiTileSet;
