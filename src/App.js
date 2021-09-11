import React from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/content';
import useProjects from './hooks';
import { ProjectProvider, SelectedProjectProvider } from './context';

export const App = () => {
  const x = '1';
  return (
    <SelectedProjectProvider>
      <ProjectProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </ProjectProvider>
    </SelectedProjectProvider>
  );
};

// sdfasfsdfdfasfdsfasdas
