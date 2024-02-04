import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Ui_contants";
import Logo from "./Logo";

const NewsLoader = (props) => {
  return (
    <View
      style={[
        {backgroundColor: "white", flex: 1, alignItems: "center", justifyContent: "center" },
        props.extraStyle && props.extraStyle,
      ]}
    >
      
      <Logo style={{
        width: SCREEN_WIDTH / 2,
        height: SCREEN_HEIGHT / 25,
      }}/>
      <View style={{ marginTop: SCREEN_HEIGHT / 90, flexDirection: "row" }}>
        <ActivityIndicator
          animating={true}
          size={"small"}
          color={"rgba(0,0,139,0.8)"}
        />
        <Text
          style={{
            marginLeft: SCREEN_WIDTH / 20,
            fontFamily: "500",
            fontSize: 14,
            fontFamily: "Montserrat",
            color: "rgba(0,0,139,0.8)",
          }}
        >
          Fetching your news
        </Text>
      </View>
    </View>
  );
};

export default NewsLoader;
