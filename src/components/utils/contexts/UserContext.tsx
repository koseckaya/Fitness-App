import { createContext, useState } from "react";
import  { User } from 'firebase/auth'

type CurrentUserContext = {
  currentUser: User | null,
  setCurrentUser: (value: User) => void
}

export const UserContext = createContext<CurrentUserContext>({
  currentUser: null,
  setCurrentUser: () => {}
});

export const UserProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value = {currentUser, setCurrentUser};
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};