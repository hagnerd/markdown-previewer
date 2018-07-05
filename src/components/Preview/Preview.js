import React from 'react';
import markdown from 'marked';

function parseMd(text) {
  return {
    __html: markdown(text),
  };
}

function Preview({ rawMd }) {
  return <div id="preview" dangerouslySetInnerHTML={parseMd(rawMd)} />;
}

export default Preview;
