import React from 'react';
import { css } from 'emotion';

const link = css`
  color: #959595;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 2px dashed #287dff;
  cursor: pointer;
  &:hover {
    color: #b6b6b6;
    border-bottom: 2px dashed #244fb5;
  }
`;

const container = css`
  display: flex;
  height: 20vh;
  justify-content: center;
  align-items: center;
`;

const Link = ({ url, text }) => (
  <a href={url} className={link} target="_blank">
    {text}
  </a>
);

function Footer() {
  return (
    <div className={container}>
      <p>
        Made by <Link url="" text="Matt Hagner" />
        with <Link url="https://reactjs.org" text="React" />,{' '}
        <Link url="https://emotion.sh" text="Emotion" />,{' '}
        <Link url="https://marked.js.org" text="Marked.js" />,{' '}
        <Link url="https://github.com/facebook/jest" text="Jest" />, and{' '}
        <Link
          url="https://github.com/kentcdodds/react-testing-library"
          text="React Testing Library"
        />.
      </p>
    </div>
  );
}

export default Footer;
