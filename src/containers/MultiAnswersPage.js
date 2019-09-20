import React, { useState } from 'react';
import TileSet from '../components/TileSet/TileSet';
import { randomMulti } from '../utils/randomizer';

const MultiAnswersPage = (props) => {
  const [current, setCurrent] = useState(1);

  const handleClick = () => {
    setCurrent(randomMulti(current));
  }

  return (
    <div>
      <TileSet current={current} />
      <button onClick={handleClick}>Next question</button>
      <button onClick={() => props.history.push('/')}>Go back</button>
      <button onClick={() => props.history.push('/results')}>Results</button>
    </div>
  );
}

export default MultiAnswersPage;
