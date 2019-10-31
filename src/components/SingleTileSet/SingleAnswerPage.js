import React from 'react';
import CardTile from 'components/TileSet/CardTile';

const SingleAnswerPage = ({ card, showAnswer, onClick }) => (
  <div onClick={onClick}>
    <CardTile question={card.question} />
    {showAnswer ? card.answer : ''}
  </div>
);

export default SingleAnswerPage;
