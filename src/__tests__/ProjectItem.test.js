// src/__tests__/ProjectItem.test.js
import { render, screen } from '@testing-library/react';
import ProjectItem from '../components/ProjectItem';

test('renders a <span> for the technology passed in as a prop', () => {
  const technology = 'React';
  render(<ProjectItem technology={technology} />);
  const spanElement = screen.getByText(technology);
  expect(spanElement).toBeInTheDocument(); // This matcher is now available
});

