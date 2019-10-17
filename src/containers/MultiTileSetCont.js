import { connect } from 'react-redux';
import MultiTileSet from '../components/MultiTileSet';
import { updateCurrentQuestion, updateChosenAnswer } from '../actions/actions';

const mapStateToProps = (store) => {
  const { currentQuestion } = store.questions;
  return {
    currentQuestion,
  };
};

const mapDispatchToProps = {
  updateCurrentQuestion,
  updateChosenAnswer,
};

const MultiTileSetCont = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MultiTileSet);

export default MultiTileSetCont;
