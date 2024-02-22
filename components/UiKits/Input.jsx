import { View, Text, TextInput } from "react-native";
import React from "react";
import { authStyles } from "../constants/style";
const Input = (props) => {
  return (
    <View style={authStyles.inputContainer}>
      <Text style={authStyles.label}>{props.label}</Text>
      <TextInput
        style={authStyles.input}
        placeholder={props.placeholder}
        onChangeText={props.changeHandler}
      />
    </View>
  );
};

export default Input;
