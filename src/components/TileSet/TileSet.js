import React, { Component } from 'react';
import CardTile from './CardTile';
import '../../styles/TileSet.css';


// eslint-disable-next-line react/prefer-stateless-function
class TileSet extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
    console.log(this.state.counter);
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="tileset" onClick={this.handleClick}>
        <CardTile className="cardtile-main" counter={counter} />
      </div>
    );
  }
}

export default TileSet;
