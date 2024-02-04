import { View, Text, Pressable, Switch } from "react-native";
import React from "react";
import { settingsStyles } from "../constants/style";
export default (props) => {
  return (
    <Pressable style={settingsStyles.button} onPress={props.handler}>
      {props.iconLeft}
      <Text style={settingsStyles.buttonLabel}>{props.label}</Text>

      {props.iconRight ? (
        props.iconRight
      ) : (
        <Switch shouldRasterizeIOS style={settingsStyles.switchBtn}  />
      )}
    </Pressable>
  );
};
