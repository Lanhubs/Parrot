import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import {
  MEDIUM_RAD,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../constants/Ui_contants";
import dummy from "../../assets/images/dummy.jpeg";
import { useNavigation } from "@react-navigation/native";
const FirstNewsHeadline = ({
  image,
  headline,
  timePosted,
  link,
  category,
  newsHandler,
}) => {
  return (
    <Pressable
      onPress={newsHandler}
      style={{
        // width: SCREEN_WIDTH / 1,
        overflow: "hidden",
        width: SCREEN_WIDTH - 40,
        borderRadius: MEDIUM_RAD,
        height: SCREEN_HEIGHT / 4,
        marginTop: SCREEN_HEIGHT / 90,
        marginHorizontal: SCREEN_WIDTH / 20,
      }}
    >
      <ImageBackground
        source={{ uri: image }}
        // source={dummy}
        resizeMode="cover"
        style={[
          StyleSheet.absoluteFill,
          {
            width: SCREEN_WIDTH - 40,
            // borderRadius: MEDIUM_RAD,
            height: SCREEN_HEIGHT / 4,
            // marginTop: SCREEN_HEIGHT / 90,
            // marginHorizontal: SCREEN_WIDTH / 20,
          },
        ]}
      >
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.3)" }}>
          <Text
            style={{
              marginHorizontal: SCREEN_WIDTH / 30,
              fontWeight: "700",
              marginTop: "auto",
              color: "#fff",
              marginBottom: SCREEN_HEIGHT / 90,
              fontSize: 18,
              fontFamily: "Montserrat",
            }}
          >
            {headline}
          </Text>
          <Text
            style={{
              marginHorizontal: SCREEN_WIDTH / 30,
              marginBottom: SCREEN_HEIGHT / 90,
              fontFamily: "Montserrat",
              color: "rgba(255,255,255,0.8)",
              fontWeight: "500",
            }}
          >
            {timePosted}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default FirstNewsHeadline;

const styles = StyleSheet.create({});
