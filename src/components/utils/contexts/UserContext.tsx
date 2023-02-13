import { createContext, useState, useEffect } from "react";
import { User } from 'firebase/auth'
import { createUserDocFromAuth, onAuthStateChangeListener } from "../firebase/firebase";

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
    const unsubscribe = onAuthStateChangeListener(async (user: User)=>{
      if (user) { 
        await createUserDocFromAuth(user) 
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