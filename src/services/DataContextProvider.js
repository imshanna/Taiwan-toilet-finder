import { createContext } from 'react';

export const DataContext = createContext(null);

export default function DataContextProvider({children, value}) {

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}