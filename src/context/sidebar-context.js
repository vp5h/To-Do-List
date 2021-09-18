import { createContext, useState, useContext } from 'react';

const SidebarContext = createContext({});

export default SidebarContext;

export const SidebarProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [showSbar, setshowSbar] = useState(false);

  const value = {
    showSbar,
    setshowSbar,
  };
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export function useSidebar() {
  return useContext(SidebarContext);
}
