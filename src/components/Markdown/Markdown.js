import React from 'react';

const initialState = {
  rawMarkdown: `
# H1 

## H2 

[Link](https://github.com)

\`const fun = () => 'fun'\`

\`\`\`javascript
function codeBlock(someArg) {
  return function(anotherArg) {
    return sumArg + anotherArg;
  }
}
\`\`\`

* List Item

> This is a blockquote. I'm going to make it long to see if it will autowrap it for me to show you.

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")


**bold text**

`,
};

export default class Markdown extends React.Component {
  state = initialState;

  handleChange = e =>
    this.setState({
      rawMarkdown: e.target.value,
    });

  render() {
    const { rawMarkdown } = this.state;
    const { handleChange } = this;
    return this.props.render({ rawMarkdown, handleChange });
  }
}
