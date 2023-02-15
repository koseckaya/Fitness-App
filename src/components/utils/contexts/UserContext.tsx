import { createContext, useState, useEffect } from "react";
import { 
  createUserDocFromAuth,
  onAuthStateChangeListener,
} from "../firebase/firebase";
import { User } from 'firebase/auth'

type CurrentUserContext = {
  currentUser: User | null,
  setCurrentUser: (value: User | null) => void
}

export const UserContext = createContext<CurrentUserContext>({
  currentUser: null,
  setCurrentUser: () => {}
});

export const UserProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value = {currentUser, setCurrentUser};

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user: User | null) => {
      if (user) { 
        createUserDocFromAuth(user)
      };
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};