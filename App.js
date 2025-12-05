import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MahasiswaScreen from "./screens/MahasiswaScreen";
import { checkAuthState, getUserFromStorage } from "./services/authService";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check user dari AsyncStorage saat app pertama kali dibuka
    const initAuth = async () => {
      const storedUser = await getUserFromStorage();
      if (storedUser) {
        setUser(storedUser);
      }
      setLoading(false);
    };

    initAuth();

    // Listen to auth state changes
    const unsubscribe = checkAuthState((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  const handleLoginSuccess = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleRegisterSuccess = (registeredUser) => {
    setUser(registeredUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {user ? (
        <MahasiswaScreen user={user} onLogout={handleLogout} />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login">{(props) => <LoginScreen {...props} onLoginSuccess={handleLoginSuccess} />}</Stack.Screen>
          <Stack.Screen name="Register">{(props) => <RegisterScreen {...props} onRegisterSuccess={handleRegisterSuccess} />}</Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
