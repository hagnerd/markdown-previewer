import React from 'react';

const initialState = {
  rawMarkdown: `
  # H1 
  ## H2 
  [Link](https://github.com)
  * List Item
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
    return this.props.render({ rawMarkdown });
  }
}
