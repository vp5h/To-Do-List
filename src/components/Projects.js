/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useProjectValue, useSelectedProjectValue } from '../context';

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectValue();
  console.log(projects);
  return (
    projects &&
    // eslint-disable-next-line array-callback-return
    projects.map((project) => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        data-testid="project-action"
        className={
          active === project.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
        }}
        onKeyDown={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
        }}
      >
        {JSON.stringify(projects)}
      </li>
    ))
  );
};
