import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const textareaStyles = css`
  padding: 5px 10px;
  margin: 5px 10px;
  height: 70vh;
  width: 50vw;
  background-color: #f2f2f2;
  border-radius: 5px;
  border: 2px solid #f2f2f2;
  color: #287dff;
  &:focus {
    border: 2px solid #959595;
  }
`;

const editorStyles = css`
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

function Editor({ onChange, textValue }) {
  return (
    <div className={editorStyles}>
      <h2
        className={css`
          text-align: center;
          height: 5vh;
        `}
      >
        Editor
      </h2>
      <textarea
        className={textareaStyles}
        id="editor"
        value={textValue}
        onChange={onChange}
      />
    </div>
  );
}

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  textValue: PropTypes.string.isRequired,
};

export default Editor;
