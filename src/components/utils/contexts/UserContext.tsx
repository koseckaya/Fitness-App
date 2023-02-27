import { createContext, useState, useEffect } from "react";
import {
  createUserDocFromAuth,
  getUserDocFromAuth,
  onAuthStateChangeListener,
} from "../firebase/firebase";
import { User } from 'firebase/auth'

type CurrentUserContext = {
  currentUser: User | null,
  name: string | ''
  setCurrentUser: (value: User | null) => void
  setName: (value: string | '') => void
}

export const UserContext = createContext<CurrentUserContext>({
  currentUser: null,
  name: '',
  setCurrentUser: () => {},
  setName: () => {}
});

export const UserProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [name, setName] = useState<string | ''>('');
  const value = {currentUser, name, setCurrentUser, setName};

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener(async (user: User | null) => {
      if (user) {
        createUserDocFromAuth(user)
        const result = await getUserDocFromAuth(user);
        if (result && result.displayName) {
          setName(result.displayName);
        }
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