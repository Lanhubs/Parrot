import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Ui_contants";

const DraweritemComponent = (props) => {
  return (
    <Pressable onPress={props.onPress} style={styles.item}>
      {props.icon}
      <Text style={[styles.label, props.color && { color: props.color }]}>
        {props.label}
      </Text>
    </Pressable>
  );
};

export default DraweritemComponent;
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    paddingHorizontal: SCREEN_WIDTH / 30,
    width: "100%",
    paddingVertical: SCREEN_HEIGHT / 80,
    alignItems: "center",
  },
  label: {
    marginLeft: SCREEN_WIDTH / 20,
    fontSize: 16,
    fontFamily: "Montserrat",
    fontWeight: "600",
    color: "darkblue",
    textTransform: "capitalize"
  },
});
