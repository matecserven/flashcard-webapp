import React from 'react';
import CardTile from './CardTile';
import AnswerTile from './AnswerTile';
import jsonData from '../../assets/javaCardsMulti.json';
import '../../stylesheets/TileSet.css';

const TileSet = (props) => {
  const { question, correct, answer } = jsonData[props.current];

  const handleClick = (e) => {
    props.updateChosenAnswer(e.target.value);
    if (correct === e.target.value) {
      props.updateCorrect();
    } else {
      props.updateInCorrect();
    }
  }

  const answerOptions = Object.entries(answer)
    .map((entry) => {
      if (entry[0].match(correct) && props.chosenAnswer) {
        return <AnswerTile key={entry[0]} answer={entry} color={'#4CAF50'} />
      }
      if (!props.chosenAnswer.match(correct) && props.chosenAnswer.match(entry[0])) {
        return <AnswerTile key={entry[0]} answer={entry} color={'#f44336'} />
      }
      return <AnswerTile key={entry[0]} answer={entry} />
    });

  return (
    <div className='tileset'>
      <CardTile question={question} />
      <div className='answers' onClick={handleClick}>
        {answerOptions}
      </div>
    </div>
  );

}

export default TileSet;
