import React from 'react';

const AnswerTile = (props) => (
  <button
    className='answerTile'
    value={props.answer[0]}
    style={{ backgroundColor: props.color }}
    onClick={props.onClick}
  >
    {props.answer[0].toUpperCase()}: {props.answer[1]}
  </button>
);

export default AnswerTile;
