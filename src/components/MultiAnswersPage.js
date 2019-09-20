import React, { useState } from 'react';
import TileSetCont from '../containers/Score/TileSetCont';
import { randomMulti } from '../utils/randomizer';

const MultiAnswersPage = (props) => {
  const [current, setCurrent] = useState(1);

  const handleClick = () => {
    setCurrent(randomMulti(current));
  }

  return (
    <div>
      <TileSetCont current={current} />
      <button onClick={handleClick}>Next question</button>
      <button onClick={() => props.history.push('/')}>Go back</button>
      <button onClick={() => props.history.push('/results')}>Results</button>
    </div>
  );
}

export default MultiAnswersPage;
