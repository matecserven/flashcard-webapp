import { connect } from 'react-redux';
import {
  updateCorrect,
  updateInCorrect,
  updateChosenAnswer,
} from 'actions/actions';
import MultiAnswersPage from 'components/MultiTileSet/MultiAnswersPage';

const mapStateToProps = (store) => {
  const { correct, incorrect } = store.score;
  const { chosenAnswer } = store.answerResult;
  return {
    correct,
    incorrect,
    chosenAnswer,
  };
};

const mapDispatchToProps = {
  updateCorrect,
  updateInCorrect,
  updateChosenAnswer,
};

const MultiAnswersPageCont = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MultiAnswersPage);

export default MultiAnswersPageCont;
