import React from 'react';
import CardTile from 'components/TileSet/CardTile';
import AnswerTile from 'components/TileSet/AnswerTile';
import 'stylesheets/TileSet.css';

const MultiAnswersPage = (props) => {
  const { question, correct, answers } = props.card;

  const handleClick = (e) => {
    if (!props.chosenAnswer) {
      props.updateChosenAnswer(e.target.value);
      correct === e.target.value
        ? props.updateCorrect()
        : props.updateInCorrect();
    }
  };

  const getColorFor = (entry) => {
    if (entry[0].match(correct) && props.chosenAnswer) {
      return '#4CAF50';
    }
    if (
      !props.chosenAnswer.match(correct) &&
      props.chosenAnswer.match(entry[0])
    ) {
      return '#f44336';
    }
  };

  const answerOptions = Object.entries(answers).map((entry) => {
    return (
      <AnswerTile
        key={entry[0]}
        answer={entry}
        onClick={handleClick}
        color={getColorFor(entry)}
      />
    );
  });

  return (
    <div className='MultiAnswersPage'>
      <CardTile question={question} />
      <div className='answers'>{answerOptions}</div>
    </div>
  );
};

export default MultiAnswersPage;
