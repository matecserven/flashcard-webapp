import { connect } from 'react-redux';
import MultiTileSet from '../components/MultiTileSet';
import { updateCurrentQuestion, updateChosenAnswer } from '../actions/actions';
import { withFirebase } from '../components/Firebase';

const mapStateToProps = (store) => {
  const { currentQuestion, cards } = store.questions;
  return {
    cards,
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

export default withFirebase(MultiTileSetCont);
