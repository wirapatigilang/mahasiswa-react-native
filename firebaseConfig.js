import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Replace with your Firebase project configuration
// Dapatkan config ini dari Firebase Console > Project Settings > General > Your apps
const firebaseConfig = {
  apiKey: "AIzaSyCnZx4Q8xpkeayA5qnY1XdWGLZ0DHxej-A",
  authDomain: "mahasiswaapp-38e9f.firebaseapp.com",
  projectId: "mahasiswaapp-38e9f",
  storageBucket: "mahasiswaapp-38e9f.firebasestorage.app",
  messagingSenderId: "785498817514",
  appId: "1:785498817514:web:cb17362b3b11bc75bda893",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication with AsyncStorage persistence for React Native
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
export const db = getFirestore(app);

export default app;
