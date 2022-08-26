import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";
import AuthProvider from "./src/contexts/auth";

export default function App(props) {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#131313" barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
