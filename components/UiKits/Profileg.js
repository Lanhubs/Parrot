import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SCREEN_HEIGHT } from "../constants/Ui_contants";
const Profileg = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <View
        style={{
          backgroundColor: "darkblue",
          height: SCREEN_HEIGHT /2.5,
        }}
      />
      <View style={{ flex: 1, backgroundColor: "#f3f3f3" }} />
    </View>
  );
};

export default Profileg;
