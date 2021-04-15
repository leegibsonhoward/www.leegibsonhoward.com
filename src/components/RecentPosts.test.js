import React from 'react';
import { render, screen, within } from '@testing-library/react';
import RecentPosts from './RecentPosts';

test('has one post in list', () => {
  render(<RecentPosts posts={1} />);

  const list = screen.getByRole('list');

  const { getAllByRole } = within(list);

  const items = getAllByRole('listitem');

  expect(items.length).toBe(1);
});
