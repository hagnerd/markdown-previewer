import React from 'react';

const initialState = {
  rawMarkdown: '# H1\n ## H2\n [Link](https://github.com)\n\n* List Item',
};

export default class Markdown extends React.Component {
  state = initialState;

  handleChange = e =>
    this.setState({
      rawMarkdown: e.target.value,
    });

  render() {
    return <div>Markdown</div>;
  }
}
