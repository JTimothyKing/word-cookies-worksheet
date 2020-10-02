import React from 'react';
import { render } from '@testing-library/react';
import Worksheet from './Worksheet';

test('renders learn react link', () => {
  const { getByText } = render(<Worksheet />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
