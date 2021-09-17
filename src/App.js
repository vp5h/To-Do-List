/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/content';
import { ProjectProvider, SelectedProjectProvider } from './context';
import { AuthProvider } from './context/AuthContext';

const App = ({ darkModeDeafult = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDeafult);
  return (
    <AuthProvider>
      <SelectedProjectProvider>
        <ProjectProvider>
          <main
            data-testid="application"
            className={darkMode ? 'darkmode' : undefined}
          >
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Content />
          </main>
        </ProjectProvider>
      </SelectedProjectProvider>
    </AuthProvider>
  );
};

// sdfasfsdfdfasfdsfasdas
export default App;
