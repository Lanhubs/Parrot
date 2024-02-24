import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  Ionicons,
} from "@expo/vector-icons";
import {
  SCREEN_WIDTH,
} from "../../components/constants/Ui_contants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from ".";
// import Profile from "./me";
import Settings from "./settings";
import Bookmarked from "./bookmarked";
const Tabs = createBottomTabNavigator() 
export default function TabLayout() {

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {paddingHorizontal: SCREEN_WIDTH/12},
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
        component={Home}
      />
      <Tabs.Screen
      component={Bookmarked}
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
      {/* <Tabs.Screen
        name="me"
        component={Profile}
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
      /> */}
      <Tabs.Screen
        name="settings"
        component={Settings}
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused?"settings-sharp":"settings-outline"} color={"darkblue"} size={25} />
          ),
         headerShown: false
        }}
      />
    </Tabs.Navigator>
  );
}
