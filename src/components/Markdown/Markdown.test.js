import React from 'react';
import { render } from 'react-testing-library';
import Markdown from './Markdown';

test('should render without issues', () => {
  render(<Markdown render={({ rawMarkdown }) => <div>{rawMarkdown}</div>} />);
});
