// src/__tests__/ProjectList.test.js
import { render, screen } from '@testing-library/react';
import ProjectList from '../components/ProjectList';

test('renders ProjectList component with ProjectItem for each project', () => {
  const projects = ['React', 'Node.js'];
  render(<ProjectList projects={projects} />);
  projects.forEach((project) => {
    const projectItem = screen.getByText(project);
    expect(projectItem).toBeInTheDocument(); // This matcher is now available
  });
});

