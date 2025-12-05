import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../firebaseConfig";

const USER_KEY = "@user_session";

// Register user baru
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Simpan informasi user ke AsyncStorage
    await saveUserToStorage(user);

    return { success: true, user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Login user
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Simpan informasi user ke AsyncStorage
    await saveUserToStorage(user);

    return { success: true, user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Logout user
export const logoutUser = async () => {
  try {
    await signOut(auth);
    // Hapus data user dari AsyncStorage
    await AsyncStorage.removeItem(USER_KEY);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Simpan user ke AsyncStorage
const saveUserToStorage = async (user) => {
  try {
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(userData));
  } catch (error) {
    console.error("Error saving user to storage:", error);
  }
};

// Ambil user dari AsyncStorage
export const getUserFromStorage = async () => {
  try {
    const userData = await AsyncStorage.getItem(USER_KEY);
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Error getting user from storage:", error);
    return null;
  }
};

// Check auth state
export const checkAuthState = (callback) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      await saveUserToStorage(user);
      callback(user);
    } else {
      await AsyncStorage.removeItem(USER_KEY);
      callback(null);
    }
  });
};
