import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

test('should render without issue', () => {
  render(<App />);
});

test('should render a child element with the id "editor"', () => {
  const { container } = render(<App />);
  const editorElement = container.querySelectorAll('#editor');
  expect(editorElement.length).toEqual(1);
});

test('should render a child element with the id "preview"', () => {
  const { container } = render(<App />);
  const previewElement = container.querySelectorAll('#preview');
  expect(previewElement.length).toEqual(1);
});
