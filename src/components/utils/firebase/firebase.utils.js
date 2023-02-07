import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth'

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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);