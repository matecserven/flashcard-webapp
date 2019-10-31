import { connect } from 'react-redux';
import SingleTileSet from 'components/SingleTileSet/SingleTileSet';
import { updateCurrentQuestion } from 'actions/actions';
import { withFirebase } from 'components/Firebase';
import { getCardsThunk } from 'thunks/thunks';

const mapStateToProps = (store) => {
  const { currentQuestion, singleAnswer } = store.cards;
  return {
    singleAnswer,
    currentQuestion,
  };
};

const mapDispatchToProps = {
  getCardsThunk,
  updateCurrentQuestion,
};

const SingleTileSetCont = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleTileSet);

export default withFirebase(SingleTileSetCont);
