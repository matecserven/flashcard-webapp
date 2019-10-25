import React, { useState } from 'react';
import FooterNav from 'components/Navigation/FooterNav';
import SingleAnswerPage from './SingleAnswerPage';
import { randomCard } from 'utils/randomizer';

const SingleTileSet = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswerClick = () => {
    setShowAnswer(true);
  };

  const handleClick = () => {
    props.updateCurrentQuestion(randomCard(props.currentQuestion, 'single'));
    setShowAnswer(false);
  };

  return (
    <div className='homePage'>
      <SingleAnswerPage
        //question={jsonData[props.currentQuestion]}
        showAnswer={showAnswer}
        onClick={handleAnswerClick}
      />
      <FooterNav onClick={handleClick} />
    </div>
  );
};

export default SingleTileSet;
