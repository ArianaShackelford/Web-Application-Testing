// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { render } from '@testing-library/react';

import {Dashboard} from './Dashboard';

test('renders dashboard in app', () => {
  const { getByText } = render(<Dashboard />);
  const linkElement = getByText(/strike/i);
  expect(linkElement).toBeInTheDocument();
});