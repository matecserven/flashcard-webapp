import { connect } from 'react-redux';
import ResultPage from '../../components/ResultPage/ResultPage';

const mapStateToProps = (store) => {
  const { correct, incorrect } = store.score;
  return {
    correct,
    incorrect,
  };
};

const ResultCont = connect(mapStateToProps)(ResultPage);

export default ResultCont;
