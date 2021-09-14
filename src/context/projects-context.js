import React, { useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import { useProjects } from '../hooks';

export const ProjectContext = createContext();
export const ProjectProvider = ({ children }) => {
  const { projects, setProjects } = useProjects();

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectValue = () => useContext(ProjectContext);

ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
