/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useProjectValue, useSelectedProjectValue } from '../context';
import { IndividualProject } from './IndividualProject';
import { useSidebar } from '../context/sidebar-context';

export const Projects = ({ activeValue }) => {
  const [active, setActive] = useState('');
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectValue();
  const { showSbar, setshowSbar } = useSidebar();

  return (
    projects &&
    // eslint-disable-next-line array-callback-return
    projects.map((project) => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        data-testid="project-action"
        className={
          active === project.projectId &&
          activeValue !== 'today' &&
          activeValue !== 'next_7' &&
          activeValue !== 'inbox'
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
          setshowSbar(!showSbar);
        }}
        onKeyDown={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
          setshowSbar(!showSbar);
        }}
      >
        <IndividualProject project={project} />
      </li>
    ))
  );
};
