import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Tabs, router } from "expo-router";

import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  MEDIUM_RAD,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  TAB_WIDTH,
} from "@/components/constants/Ui_contants";
import { Pressable, Text,  View } from "react-native";
import Logo from "@/components/UiKits/Logo";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Montserrat",
          color: "darkblue",
          display: "none"
        },
        tabBarItemStyle: {
          marginVertical: 5,
          
        },
       
        
      }}
      initialRouteName="index"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "News",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "newspaper" : "newspaper-outline"}
              color={"darkblue"}
              size={25}
            />
          ),
          
        }}
      />
      <Tabs.Screen
        name="bookmarked"
        options={{
          title: "Bookmarks",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "bookmark-sharp" : "bookmarks-outline"}
              color={"darkblue"}
              size={25}
            />
          ),
         
        }}
      />
      <Tabs.Screen
        name="me"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name={focused ? "user" : "user-o"}
              color={"darkblue"}
              size={25}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused?"settings-sharp":"settings-outline"} color={"darkblue"} size={25} />
          ),
         headerShown: false
        }}
      />
    </Tabs>
  );
}
