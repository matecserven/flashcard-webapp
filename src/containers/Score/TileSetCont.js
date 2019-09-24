import { connect } from 'react-redux';
import { updateCorrect, updateInCorrect, updateChosenAnswer } from '../../actions/actions';
import TileSet from '../../components/TileSet/TileSet';

const mapStateToProps = (store) => {
  const { correct, incorrect, } = store.score;
  const { chosenAnswer } = store.answerResult;
  return {
    correct,
    incorrect,
    chosenAnswer
  };
};

const mapDispatchToProps = {
  updateCorrect,
  updateInCorrect,
  updateChosenAnswer
};

const TileSetCont = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TileSet);

export default TileSetCont;
