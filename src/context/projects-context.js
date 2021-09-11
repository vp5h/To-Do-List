import React, { useContext, createContext } from 'react';
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
