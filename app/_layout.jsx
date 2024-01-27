import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { loadAsync, useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import NewsProviders from "../components/Providers/NewsProviders";
import "expo-dev-client";
import { Platform } from "react-native";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";
import Montserrat from "../assets/fonts/Montserrat.ttf";
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loadedAd, setLoadedAd] = useState(false);
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
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);
  useEffect(() => {
    // if(Platform.OS=== "android" || Platform.OS === "ios"){
    // }
      loadFonts();
  }, []);
  useEffect(() => {

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <NewsProviders>
      <Stack initialRouteName="(tabs)">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />

        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="forgotPassword" options={{ headerShown: false }} />
        
        <Stack.Screen name="details" options={{ headerShown: false }} />
      </Stack>
    </NewsProviders>
  );
}
