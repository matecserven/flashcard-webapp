import { connect } from 'react-redux';
import SingleTileSet from '../components/SingleTileSet/SingleTileSet';
import { updateCurrentQuestion } from '../actions/actions';

const mapStateToProps = (store) => {
  const { currentQuestion } = store.question;
  return {
    currentQuestion,
  };
};

const mapDispatchToProps = {
  updateCurrentQuestion,
};

const SingleTileSetCont = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleTileSet);

export default SingleTileSetCont;
