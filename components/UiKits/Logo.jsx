import { View, Text, Image } from "react-native";
import React from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Ui_contants";

const Logo = (props) => {
  return (
    <Image
        source={require("../../assets/images/icon.png")}
        style={[
          {
            width: SCREEN_WIDTH / 3,
            height: SCREEN_HEIGHT / 30,
            marginHorizontal: "auto",
            marginVertical: SCREEN_HEIGHT / 70,
          },
          props.style,
        ]}
      />

  );
};

export default Logo;
