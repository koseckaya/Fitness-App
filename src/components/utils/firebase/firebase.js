import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
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

export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
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
      console.log('error creating user', error.message);
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPass = async (email, password) => {
  if(!email && !password) return;

  return await createUserWithEmailAndPassword(auth, email, password); 
}