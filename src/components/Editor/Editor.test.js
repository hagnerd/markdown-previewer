import React from 'react';
import { render } from 'react-testing-library';
import Editor from './Editor';

const createProps = props => ({
  onChange: jest.fn(),
  textValue: '# H1',
  ...props,
});

test('should render without crashing', () => {
  const props = createProps();
  render(<Editor {...props} />);
});

test('should render a textarea', () => {
  const props = createProps();
  const { container } = render(<Editor {...props} />);
  expect(container.querySelector('textarea')).toBeTruthy();
});

test('should render with the id "editor"', () => {
  const props = createProps();
  const { container } = render(<Editor {...props} />);
  expect(container.querySelectorAll('#editor').length).toEqual(1);
});

test('should render text passed into the component', () => {
  const props = createProps();
  const { getByText } = render(<Editor {...props} />);
  expect(getByText('# H1')).toBeInTheDOM();
});
