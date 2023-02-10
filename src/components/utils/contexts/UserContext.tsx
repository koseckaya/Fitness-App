import { createContext, useState } from "react";

type CurrentUserContext = {
  currentUser: unknown,
  setCurrentUser: (value: unknown) => void
}

export const UserContext = createContext<CurrentUserContext>({
  currentUser: '',
  setCurrentUser: () => {}
});

export const UserProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const [currentUser, setCurrentUser] = useState<unknown>(null);
  const value = {currentUser, setCurrentUser};
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};