import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar'; // Adjust the path if necessary

test("renders three <a> elements", () => {
  render(<NavBar />);
  const links = screen.getAllByRole('link'); // Queries all <a> elements
  expect(links).toHaveLength(3);
});
