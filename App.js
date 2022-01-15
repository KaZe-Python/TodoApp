import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import HomeScreen from "./src/screens/HomeScreen";
import EditScreen from "./src/screens/EditScreen";

//Context
import TodoContextProvider from "./src/context/todoContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TodoContextProvider>
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="home"
      >
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </TodoContextProvider>
  );
}
