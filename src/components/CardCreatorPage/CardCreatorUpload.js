import React from 'react';

const CardCreatorUpload = () => {
  const fileInput = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    let file = fileInput.current.files[0];

    reader.onload = function() {
      console.log(JSON.parse(reader.result));
    };

    reader.readAsText(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Upload your file here:
          <input type='file' ref={fileInput} />
        </label>
      </div>
      <input className='button is-primary' type='submit' value='Submit' />
    </form>
  );
};

export default CardCreatorUpload;
