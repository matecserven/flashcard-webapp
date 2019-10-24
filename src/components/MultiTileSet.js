import React, { useEffect } from 'react';
import MultiAnswersPageCont from 'containers/MultiAnswersPageCont';
import ResultCont from 'containers/ResultCont';
import FooterNav from 'components/Navigation/FooterNav';
import { randomCard } from 'utils/randomizer';
import { isEmpty } from 'lodash';
import 'stylesheets/loader.scss';

const MultiTileSet = (props) => {
  useEffect(() => {
    isEmpty(props.cards) && props.getCardsThunk(props.firebase);
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
        <div>
          Loading...
          <div className='lds-ring'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <MultiAnswersPageCont current={props.currentQuestion} />
      )}
      <FooterNav onClick={handleClick} />
    </div>
  );
};

export default MultiTileSet;
