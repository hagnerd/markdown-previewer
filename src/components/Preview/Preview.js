import React from 'react';
import MdParse from 'markdown-to-jsx';

function Preview({ rawMd }) {
  return <MdParse id="preview">{rawMd}</MdParse>;
}

export default Preview;
