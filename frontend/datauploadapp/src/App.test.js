import React from 'react';
import { render,cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

test('snapshot for App', () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});
