import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Welcome from './Welcome';

test('has correct welcome text', () => {
  render(<Welcome firstName="Jon" lastName="Snow" />);
  expect(screen.getByRole('heading')).toHaveTextContent('Welcome, Jon Snow');
});
