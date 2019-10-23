import React from 'react';
import CardTile from './CardTile';
import AnswerTile from './AnswerTile';
import 'stylesheets/TileSet.css';

const MultiAnswersPage = (props) => {
  const { question, correct, answers } = props.cards[props.current];

  const handleClick = (e) => {
    if (!props.chosenAnswer) {
      props.updateChosenAnswer(e.target.value);
      if (correct === e.target.value) {
        props.updateCorrect();
      } else {
        props.updateInCorrect();
      }
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
