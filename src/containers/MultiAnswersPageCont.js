import { connect } from 'react-redux';
import MultiAnswersPage from '../components/MultiAnswersPage';
import { updateCurrentQuestion, updateChosenAnswer } from '../actions/actions';

const mapStateToProps = (store) => {
  const { currentQuestion } = store.question;
  return {
    currentQuestion,
  };
};

const mapDispatchToProps = {
  updateCurrentQuestion,
  updateChosenAnswer,
};

const MultiAnswersPageCont = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MultiAnswersPage);

export default MultiAnswersPageCont;
