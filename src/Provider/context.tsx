import React, { useState, useContext, ReactNode } from 'react';
import sublinks from '../components/Header/const';

type Link = {
  label: string;
  url: string;
};

type Sublink = {
  page: string;
  links: Link[];
};

type PageType = {
  page: string;
  links: Link[];
};

type LocationType = {
  center?: number;
  bottom?: number;
};

interface AppContextType {
  isSidebarOpen: boolean;
  isSubmenuOpen: boolean;
  page: PageType;
  location: LocationType;
  openSidebar: () => void;
  closeSidebar: () => void;
  openSubmenu: (text: string, coordinates: LocationType) => void;
  closeSubmenu: () => void;
}

const defaultPage: PageType = { page: '', links: [] };
const defaultLocation: LocationType = {};

const AppContext = React.createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState<PageType>(defaultPage);
  const [location, setLocation] = useState<LocationType>(defaultLocation); // Starts with null


  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const openSubmenu = (text: string, coordinates: LocationType) => {
    const currentPage =
      sublinks.find(link => link.page === text) || defaultPage;
    setPage(currentPage);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => setIsSubmenuOpen(false);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        page,
        location,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within an AppProvider');
  }
  return context;
};

export { AppContext, AppProvider };
