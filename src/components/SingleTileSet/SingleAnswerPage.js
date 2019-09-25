import React from 'react';
import CardTile from '../TileSet/CardTile';

const SingleAnswerPage = ({ question, showAnswer, onClick }) => (
  <div onClick={onClick}>
    <CardTile question={question.q} />
    {showAnswer ? question.a : ''}
  </div>
);

export default SingleAnswerPage;
