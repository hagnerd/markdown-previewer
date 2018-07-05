import React, { Component } from 'react';
import Markdown from '../components/Markdown';
import Editor from '../components/Editor';
import Preview from '../components/Preview';
import Footer from '../components/Footer/Footer';
import { css, injectGlobal } from 'emotion';

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  code {
    width: 90%;
    background-color: #f2f2f2;
    border: 2px solid #f2f2f2;
    border-radius: 5px;
  }

  pre {
    width: 90%;
    background-color: #f2f2f2;
    border: 2px solid #f2f2f2;
    border-radius: 5px;
  }
`;

const wrapper = css`
  display: flex;
`;

const container = css`
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <div className={container}>
        <Markdown
          render={({ rawMarkdown, handleChange }) => (
            <div className={wrapper}>
              <Editor onChange={handleChange} textValue={rawMarkdown} />
              <Preview rawMd={rawMarkdown} />
            </div>
          )}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
