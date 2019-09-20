import React from 'react';
import CardTile from './CardTile';
import AnswerTile from './AnswerTile';
import jsonData from '../../assets/javaCardsMulti.json';
import '../../stylesheets/TileSet.css';

const TileSet = (props) => {
  const handleClick = (e) => {
    if (jsonData[props.current].correct === e.target.value) {
      alert('You are amazing!');
      props.updateCorrect();
    } else {
      alert(`Nope correct answer: ${jsonData[props.current].correct.toUpperCase()}`);
      props.updateInCorrect();
    }
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
