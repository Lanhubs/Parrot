import { ActivityIndicator, Text, Pres, Pressable } from "react-native";
import React from "react";
import { authStyles } from "../constants/style";
import { Ionicons } from "@expo/vector-icons";

const Button = (props) => {
  return (
    <Pressable
      style={[authStyles.button, props?.btnStyle]}
      onPress={props.clickHandler}
    >
      <Text style={[authStyles.buttonText, props.textStyle]}>
        {props.title}
      </Text>
      {props.loading ? (
        <ActivityIndicator size={25} color={"#fff"} />
      ) : (
        props.icon
      )}
    </Pressable>
  );
};

export default Button;
