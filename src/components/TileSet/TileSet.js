import React from 'react';
import CardTile from './CardTile';
import AnswerTile from './AnswerTile';
import '../../styles/TileSet.css';
import jsonData from '../../assets/javaCardsMulti.json';

const TileSet = (props) => {
  const handleClick = (e) => {
    (jsonData[props.current].correct === e.target.value)
      ? alert('You are amazing!')
      : alert(`Nope correct answer: ${jsonData[props.current].correct.toUpperCase()}`);
  }

  const answerOptions = Object.entries(jsonData[props.current].answer).map((entry) => <AnswerTile key={entry[0]} answer={entry} />)

  return (
    <div className='tileset'>
      <CardTile current={jsonData[props.current]} />
      <div className='answers' onClick={handleClick}>
        {answerOptions}
      </div>
    </div>
  );
}

export default TileSet;
