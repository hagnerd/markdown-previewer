import React, { Component, Fragment } from 'react';
import Markdown from '../components/Markdown';
import Editor from '../components/Editor';
import Preview from '../components/Preview';

class App extends Component {
  render() {
    return (
      <Markdown
        render={({ rawMarkdown, handleChange }) => (
          <Fragment>
            <Editor onChange={handleChange} textValue={rawMarkdown} />
            <Preview rawMd={rawMarkdown} />
          </Fragment>
        )}
      />
    );
  }
}

export default App;
