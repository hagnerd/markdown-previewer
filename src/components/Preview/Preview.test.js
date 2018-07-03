import React from 'react';
import { render } from 'react-testing-library';
import Preview from './Preview';

const createProps = props => ({
  rawMd: '# H1',
  ...props,
});

test('should render without crashing', () => {
  const props = createProps();
  render(<Preview {...props} />);
});

test('should render with the id "preview"', () => {
  const props = createProps();
  const { container } = render(<Preview {...props} />);
  expect(container.querySelectorAll('#preview').length).toEqual(1);
});

test('should render the text passed in', () => {
  const props = createProps();
  const { getByText } = render(<Preview {...props} />);
  expect(getByText('H1')).toBeInTheDOM();
});
