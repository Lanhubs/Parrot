import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { loadAsync, useFonts } from "expo-font";
import { useEffect, useState } from "react";
// import NewsProviders from "../components/Providers/NewsProviders";
import "expo-dev-client";
import { Platform } from "react-native";

import Montserrat from "../assets/fonts/Montserrat.ttf";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabLayout from "./Tabs/Tabs";
import Login from "./login";
import SignUp from "./signup";
import ForgotPassword from "./forgotPassword";
import Details from "./details";
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

const Stack = createNativeStackNavigator();
export default function RootNav() {
  const loadFonts = async () => {
    await loadAsync({
      SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
      Montserrat: require("../assets/fonts/Montserrat.ttf"),

      ...FontAwesome.font,
    });
  };
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Montserrat,
  });
  useEffect(() => {
    // if(Platform.OS=== "android" || Platform.OS === "ios"){
    // }
    loadFonts();
  }, []);
  return (
    <NavigationContainer>

    <Stack.Navigator
      initialRouteName="tabs"

      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="tabs" component={TabLayout}  />
      <Stack.Screen name="login"  component={Login} />

      <Stack.Screen name="signup"   component={SignUp}/>
      <Stack.Screen name="forgotPassword"  component={ForgotPassword}/>

      <Stack.Screen name="details" component={Details}  />
    </Stack.Navigator>
    </NavigationContainer>

  );
}
