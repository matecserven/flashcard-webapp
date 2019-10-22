import { connect } from 'react-redux';
import MultiTileSet from '../components/MultiTileSet';
import { updateCurrentQuestion, updateChosenAnswer } from '../actions/actions';
import { withFirebase } from '../components/Firebase';
import { getCardsThunk } from '../thunks/thunks';

const mapStateToProps = (store) => {
  const { currentQuestion, cards } = store.questions;
  return {
    cards,
    currentQuestion,
  };
};

const mapDispatchToProps = {
  getCardsThunk,
  updateCurrentQuestion,
  updateChosenAnswer,
};

const MultiTileSetCont = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MultiTileSet);

export default withFirebase(MultiTileSetCont);
