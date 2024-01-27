import { View, Text, Pressable, } from "react-native";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "@/components/constants/Ui_contants";
import Logo from "@/components/UiKits/Logo";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#fff",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: SCREEN_HEIGHT / 120,
          paddingHorizontal: SCREEN_WIDTH / 20,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <FontAwesome name="angle-left" size={25} />
        </Pressable>
        <Logo />
        <Pressable>
          <Ionicons name="notifications-outline" size={25} />
        </Pressable>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{ fontSize: 20 }}>Page is comming soon</Text>
      </View>
    </SafeAreaView>
  );
};

export default Page;
