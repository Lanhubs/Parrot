import { View, Text, Pressable, } from "react-native";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../components/constants/Ui_contants";
import Logo from "../../components/UiKits/Logo";

export default function Bookmarked(){
const navigation = useNavigation()
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
        <Pressable onPress={() => navigation.goBack()}>
          <FontAwesome name="angle-left" size={25} />
        </Pressable>
        <Logo />
        <Pressable>
          <Ionicons name="notifications-outline" size={25} />
        </Pressable>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{ fontSize: 20 }}>Bookmarked is comming soon</Text>
      </View>
    </SafeAreaView>
  );
};


