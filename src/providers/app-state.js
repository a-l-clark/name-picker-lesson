import React, { createContext, useContext, useState } from "react";

const AppStateContext = createContext();

export function AppStateProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [shortList, setShortList] = useState([]);

  const value = { searchTerm, setSearchTerm, shortList, setShortList };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context)
    return new Error(
      "You probably forgot a <AppStateProvider> context provider."
    );
  return context;
}
