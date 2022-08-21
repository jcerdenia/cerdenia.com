import { createContext, useState } from "react";

type Category = string | null;

interface AppState {
  activeWorkCategory: Category;
  // eslint-disable-next-line no-unused-vars
  setActiveWorkCategory: (category: string) => void;
  enableHomeBackground: boolean;
}

export const AppStateContext = createContext({} as AppState);

const AppStateProvider = ({ children }: any): JSX.Element => {
  const [activeWorkCategory, setActiveWorkCategory] = useState<Category>(null);

  const value: AppState = {
    activeWorkCategory,
    setActiveWorkCategory,
    enableHomeBackground: true,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
