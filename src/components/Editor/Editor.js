import React from 'react';
import PropTypes from 'prop-types';

function Editor({ onChange, textValue }) {
  return <textarea id="editor" value={textValue} onChange={onChange} />;
}

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  textValue: PropTypes.string.isRequired,
};

export default Editor;
