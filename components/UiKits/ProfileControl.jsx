import { View, Text, Pressable } from "react-native";
import React from "react";
import { profileStyles } from "../constants/style";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { SCREEN_WIDTH } from "../constants/Ui_contants";
const ProfileControl = (props) => {
  return (
    <Pressable
      style={[
        profileStyles.controlContainer,
        { borderBottomColor: props.textColor ? props.textColor : "rgba(0,0,139,0.5)" },
      ]}
      onPress={props.clickHandler}
    >
      {props.rightIcon}
      <Text
        style={[
          profileStyles.controllerText,
          { color: props.textColor && props.textColor },
        ]}
      >
        {props.text}
      </Text>
      <View style={{ marginLeft: "auto", width: SCREEN_WIDTH / 20 }}>
        <FontAwesome
          name="angle-right"
          size={20}
          color={props.textColor ? props.textColor : "darkblue"}
          style={{ fontWeight: "600",}}
        />
      </View>
    </Pressable>
  );
};

export default ProfileControl;
