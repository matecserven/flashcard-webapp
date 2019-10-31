import React, { useEffect } from 'react';
import MultiAnswersPageCont from 'containers/MultiAnswersPageCont';
import ResultCont from 'containers/ResultCont';
import FooterNav from 'components/Navigation/FooterNav';
import { randomCard } from 'utils/randomizer';
import { isEmpty } from 'lodash';
import LoadingAnimation from 'components/TileSet/LoadingAnimation';

const MultiTileSet = (props) => {
  const {
    multipleAnswers,
    currentQuestion,
    getCardsThunk,
    firebase,
    updateChosenAnswer,
    updateCurrentQuestion,
  } = props;

  useEffect(() => {
    isEmpty(multipleAnswers) &&
      getCardsThunk(firebase, 'java', 'multipleAnswers');
  }, []);

  useEffect(() => {
    !Object.keys(multipleAnswers).includes(currentQuestion) &&
      updateCurrentQuestion(
        randomCard(currentQuestion, Object.keys(multipleAnswers)),
      );
  }, []);

  const handleClick = () => {
    updateCurrentQuestion(
      randomCard(currentQuestion, Object.keys(multipleAnswers)),
    );
    updateChosenAnswer('');
  };

  return (
    <div className='homePage'>
      <ResultCont />
      {!Object.keys(multipleAnswers).includes(currentQuestion) ? (
        <LoadingAnimation />
      ) : (
        <MultiAnswersPageCont card={multipleAnswers[currentQuestion]} />
      )}
      <FooterNav onClick={handleClick} />
    </div>
  );
};

export default MultiTileSet;
