import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Ui_contants";

export const newsType = [
  "news",
  "education",
  "sports",
  "technology",
  "international",
  "entertainment",
];
const NewsTypeScroll = (props) => {
  const [selectedItem, setSelectedItem] = React.useState(null);
  const handleSelectedItem = (index) => {
    setSelectedItem(index);
  };
  return (
    <ScrollView
      horizontal={true}
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        marginLeft: SCREEN_WIDTH / 30,
        paddingVertical: SCREEN_HEIGHT / 60,
        justifyContent: "center",
      }}
    >
      {newsType.map((item, idx) => (
        <Pressable
          key={idx}
          onPress={() => {
            props.fetchNews(item);
            handleSelectedItem(idx);
          }}
          style={{
            // marginRight: SCREEN_WIDTH / 20,
            width: item.length <= 7 ? SCREEN_WIDTH / 4.2 : SCREEN_WIDTH / 2.7,
            paddingRight: SCREEN_WIDTH / 30,
            // paddingVertical: SCREEN_HEIGHT / 90,
          }}
        >
          <Text
            style={[
              {
                textTransform: "capitalize",
                fontFamily: "Montserrat",
                fontWeight: "700",
                borderBottomWidth: 1.7,
                textAlign: "center",
                fontSize: 16,
                color: selectedItem === idx ? "darkblue" : "rgba(0,0,0,0.3)",
                
                borderBottomColor: selectedItem === idx ? "darkblue" : "white",
              },
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
  fontSize: 18,
};
export const unClickedStyle = {
  color: "rgba(0,0,0,0.2)",

  fontSize: 18,
};
