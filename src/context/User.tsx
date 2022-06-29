import React, { createContext, ReactNode, useContext, useState } from 'react'

interface UserContextProps {
  accessToken: string;
  setAccessToken: (token: string) => void;
}

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextProps);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [accessToken, setAccessToken] = useState('');

  return (
    <UserContext.Provider value={{accessToken, setAccessToken}}>
      {children}
    </UserContext.Provider>
  )
}