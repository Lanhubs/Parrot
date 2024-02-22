import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  NavigationContainer,
  
  } from "@react-navigation/native";
import { loadAsync, useFonts } from "expo-font";
import { useEffect, useState } from "react";
import "expo-dev-client";

import Montserrat from "../assets/fonts/Montserrat.ttf";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./login";
import SignUp from "./signup";
import ForgotPassword from "./forgotPassword";
import Details from "./details";
import Privacy from "./Privacy";
import ContactUs from "./ContactUs";
import TabLayout from "./Tabs/Tabs";
export const unstable_settings = {
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

  useEffect(() => {
    loadFonts();
  }, []);
  return (
<<<<<<< HEAD
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="tabs"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen  name="tabs" component={TabLayout} />
      <Stack.Screen name="login"  component={Login} />

      <Stack.Screen name="signup"   component={SignUp}/>
      <Stack.Screen name="forgotPassword"  component={ForgotPassword}/>

      <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="privacy" component={Privacy} />
=======

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="tabs"
          screenOptions={{ headerShown: false,  }}
        >
          <Stack.Screen
            name="tabs"
            component={TabLayout}
            
          />
          <Stack.Screen name="login" component={Login} />
>>>>>>> 2b9d31fb7fbe917ce12516cd52857fd6c0fbcb1a

          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="forgotPassword" component={ForgotPassword} />

          <Stack.Screen name="details" component={Details} />
          <Stack.Screen name="privacy" component={Privacy} />
          <Stack.Screen name="contactus" component={ContactUs} />
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}
