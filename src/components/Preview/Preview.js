import React from 'react';
import markdown from 'marked';
import { css } from 'emotion';

const blockStyles = css`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 50vw;
`;

const previewStyles = css`
  padding: 5px 20px;
`;

function parseMd(text) {
  return {
    __html: markdown(text),
  };
}

function Preview({ rawMd }) {
  return (
    <div className={blockStyles}>
      <h2
        className={css`
          text-align: center;
        `}
      >
        Preview
      </h2>
      <div
        className={previewStyles}
        id="preview"
        dangerouslySetInnerHTML={parseMd(rawMd)}
      />
    </div>
  );
}

export default Preview;
