import { connect } from 'react-redux';
import { updateCorrect, updateInCorrect } from '../../actions/actions';
import TileSet from '../../components/TileSet/TileSet';

const mapStateToProps = (store) => {
  const {
    correct, incorrect,
  } = store.score;
  return {
    correct,
    incorrect,
  };
};

const mapDispatchToProps = {
  updateCorrect,
  updateInCorrect,
};

const TileSetCont = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TileSet);

export default TileSetCont;
