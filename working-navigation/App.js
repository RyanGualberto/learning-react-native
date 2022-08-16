import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{
            title: "Welcome to Sobre",
            headerStyle: {
              backgroundColor: "#121212",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
