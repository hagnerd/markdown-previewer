import React, { Component } from 'react';
import Markdown from '../components/Markdown';

class App extends Component {
  render() {
    return (
      <Markdown
        render={({ rawMarkdown }) => (
          <React.Fragment>
            <div id="editor">Editor</div>
            <div id="preview">Preview</div>
          </React.Fragment>
        )}
      />
    );
  }
}

export default App;
