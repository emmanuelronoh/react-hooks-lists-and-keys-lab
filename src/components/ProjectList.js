// src/components/ProjectList.js
import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectItem key={index} technology={project} />
      ))}
    </div>
  );
};

export default ProjectList;
