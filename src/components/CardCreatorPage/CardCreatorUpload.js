import React from 'react';
import { withFirebase } from 'components/Firebase';

const CardCreatorUpload = ({ firebase }) => {
  const fileInput = React.createRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.onload = function() {
      const data = JSON.parse(reader.result);

      if (data[0].hasOwnProperty('correct')) {
        if (
          !data.every(
            (elem) =>
              elem.hasOwnProperty('question') &&
              elem.hasOwnProperty('answers') &&
              elem.hasOwnProperty('correct'),
          )
        ) {
          return;
        }
        data.forEach((elem) =>
          firebase.addMultipleAnswersCard(
            {
              question: elem.question,
              answers: elem.answers,
              correct: elem.correct,
            },
            'Java',
          ),
        );
      }
    };

    reader.readAsText(file);
  };

  return (
    <form onSubmit={handleSubmit} className='column'>
      <label className='field-label is-size-1'>Upload your file here:</label>
      <div className='field'>
        <label
          id='uploadLabel'
          htmlFor='fileUpload'
          className='button is-primary'
        >
          Click HERE
        </label>
        <div className='uploadHider'>
          <input id='fileUpload' type='file' ref={fileInput} />
        </div>
      </div>
      <input className='button is-primary' type='submit' value='Submit' />
    </form>
  );
};

export default withFirebase(CardCreatorUpload);
