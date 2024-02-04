import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Ui_contants";

export const newsType = [
  "News",
  "International",
  "entertainment",
  "Education",
  "technology",
  "",
];
const NewsTypeScroll = (props) => {
  return (
    <ScrollView
      horizontal={true}
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        height: SCREEN_HEIGHT / 20,
        marginLeft: SCREEN_WIDTH / 20,
        paddingVertical: "auto",
      }}
    >
      {newsType.map((item, idx) => (
        <Pressable
          key={idx}
          onPress={()=>props.clickHandler(item)}
          style={{ marginRight: SCREEN_HEIGHT / 40, marginVertical: "auto" }}
        >
          <Text
            style={[
              idx === 0 ? clickedStyle : unClickedStyle,
              { textTransform: "capitalize" },
            ]}
          >
            {item}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default NewsTypeScroll;
export const clickedStyle = {
  color: "#000",
  fontWeight: "600",
  fontSize: 18,
};
export const unClickedStyle = {
  color: "rgba(0,0,0,0.2)",
  fontWeight: "500",
  fontSize: 18,
};
