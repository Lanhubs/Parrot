import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import {
  MEDIUM_RAD,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../constants/Ui_contants";
// import {truncator} from "../constants/methods"
const NewsHeadlineCard = (props) => {
  const truncator = (statement) => {
    var limit = 10;
    const words = statement.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    } else {
      return statement;
    }
  };

  return (
    <Pressable
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: SCREEN_WIDTH / 20,
      }}
      onPress={props.newsHandler}
    >
      <View style={styles.newsHeadlineContainer}>
        <Image source={{ uri: props.image }} style={styles.image} />
        <View style={styles.headlineContainer}>
          <Text style={styles.headline}>{truncator(props.title)}</Text>
          <Text style={styles.timePosted}>{props.timePosted}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default NewsHeadlineCard;
const styles = StyleSheet.create({
  newsHeadlineContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: SCREEN_HEIGHT / 9,
    borderBottomWidth: 1.7,
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
  },
  image: {
    width: SCREEN_WIDTH / 5,
    borderRadius: MEDIUM_RAD,
    height: SCREEN_HEIGHT / 12,
  },
  timePosted: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    marginBottom: SCREEN_HEIGHT / 120,
  },
  headline: {
    fontSize: 15,
    fontFamily: "Montserrat",
    fontWeight: "600",
    color: "#000",
  },
  headlineContainer: {
    marginLeft: SCREEN_WIDTH / 30,
    width: SCREEN_WIDTH / 1.5,
  },
});
