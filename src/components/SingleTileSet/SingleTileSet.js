import React, { useState, useEffect } from 'react';
import FooterNav from 'components/Navigation/FooterNav';
import SingleAnswerPage from './SingleAnswerPage';
import { randomCard } from 'utils/randomizer';
import { isEmpty } from 'lodash';
import LoadingAnimation from 'components/LoadingAnimation';

const SingleTileSet = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    isEmpty(props.singleAnswer) &&
      props.getCardsThunk(props.firebase, 'java', 'singleAnswer');
  }, []);

  useEffect(() => {
    !Object.keys(props.singleAnswer).includes(props.currentQuestion) &&
      props.updateCurrentQuestion(
        randomCard(props.currentQuestion, Object.keys(props.singleAnswer)),
      );
  }, []);

  const handleAnswerClick = () => {
    setShowAnswer(true);
  };

  const handleClick = () => {
    props.updateCurrentQuestion(
      randomCard(props.currentQuestion, Object.keys(props.singleAnswer)),
    );
    setShowAnswer(false);
  };

  return (
    <div className='homePage'>
      {!Object.keys(props.singleAnswer).includes(props.currentQuestion) ? (
        <LoadingAnimation />
      ) : (
        <SingleAnswerPage
          card={props.singleAnswer[props.currentQuestion]}
          showAnswer={showAnswer}
          onClick={handleAnswerClick}
        />
      )}
      <FooterNav onClick={handleClick} />
    </div>
  );
};

export default SingleTileSet;
