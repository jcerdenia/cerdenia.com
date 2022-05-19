import { createContext, useContext, useState } from "react";

type Category = string | null;

export const AppStateContext = createContext({} as any);

const AppStateProvider = ({ children }: any): JSX.Element => {
  const [activeWorkCategory, setActiveWorkCategory] = useState<Category>(null);

  return (
    <AppStateContext.Provider
      value={{ activeWorkCategory, setActiveWorkCategory }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
