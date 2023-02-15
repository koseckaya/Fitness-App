import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  DocumentSnapshot
} from 'firebase/firestore';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWggYMcrri8cZRg0cS8hqdSWMugVkMUBk",
  authDomain: "fitness-app-rsschool.firebaseapp.com",
  projectId: "fitness-app-rsschool",
  storageBucket: "fitness-app-rsschool.appspot.com",
  messagingSenderId: "25561443999",
  appId: "1:25561443999:web:292b093174ffae20df7caa"
};

export type UserData = {
  displayName: string,
  email: string,
  createdAt: Date,
 }

export type AdditionalInformation = {
  displayName?: string,
  lastName?: string,
  updatedAt?: Date,
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const createUserDocFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | DocumentSnapshot<UserData>> => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  const userExist = userSnapshot.exists();
  
  if (!userExist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      if (error instanceof Error) console.log('error creating user', error.message);
    }
  }

  return userSnapshot as DocumentSnapshot<UserData>;
}

export const updateUserDocFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  const userExist = userSnapshot.exists();
  
  if (!userExist) {
    const updatedAt = new Date();

    try {
      await updateDoc(userDocRef, {
        updatedAt,
        ...additionalInformation
      });
    } catch (error) {
      if (error instanceof Error) console.log('error creating user', error.message);
    }
  }

  return userDocRef;
}

export const getUserDocFromAuth = async (userAuth: User ) => {
  
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  return userSnapshot.data();
}

export const createAuthUserWithEmailAndPass = async (email: string, password: string) => {
  if(!email && !password) return;

  return await createUserWithEmailAndPassword(auth, email, password); 
}

export const signInAuthUserWithEmailAndPass = async (email: string, password: string) => {
  if(!email && !password) return;

  return await signInWithEmailAndPassword(auth, email, password); 
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangeListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);