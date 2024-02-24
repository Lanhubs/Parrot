import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Pressable,
  Alert,
  ActivityIndicator,
  FlatList,
  VirtualizedList,
} from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { newsStyle } from "../components/constants/style";
import NewsLoader from "../components/UiKits/NewsLoader";
import { Ionicons } from "@expo/vector-icons";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../components/constants/Ui_contants";
import Logo from "../components/UiKits/Logo";
import { useNavigation, useRoute } from "@react-navigation/native";
import HrCenter from "../components/UiKits/HrCenter";

export default function Details({ route, navigation }) {
  const [news, usenews] = React.useState(null);
  const [newsContent, usenewsContent] = React.useState({
    read: "", image: null, title: "", time: "", category: "", content: ""
  });

  const [loading, setLoading] = React.useState(true);
  const [categoryN, setCategory] = React.useState(null);
  const { read, image, title, time, category } = route.params;
  const scrollRef = useRef()
  const timePosted = (time) => {
    date = new Date(time);
    const timeData = {
      year: date.getFullYear(),
      month: date.toLocaleString("en-US", { month: "long" }),
      day: date.getDate(),
      time: date.getHours(),
      min: date.getMinutes(),
      hours: date.getHours >= 12 ? "PM" : "AM",
    };
    return `${timeData.day}th ${timeData.month}-${timeData.year} ${timeData.time}:${timeData.min} ${timeData.hours}`;
  };
const changeNewsContent=(data)=>{
  console.log(data)
  scrollRef.current?.scrollTo({
    y: 0,
    animated: true,
  });
  usenewsContent({...data, time: data.date})


}
  const fetchnews = async () => {
    try {
      const response = await fetch("https://parrotnews.ng/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uri: read,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        usenews(data);
        usenewsContent({...route.params, content: data})
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      Alert.alert("please kindly check your network and try again!");
    }
  };
  React.useEffect(() => {
    fetchnews();
  });

  const categoryNews = () => {
    fetch(`https://parrotnews.ng/category?url=news`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCategory(data);
      })
      .catch((error) => {
        //handle the request if  its failed to load
        //anything as your choice
      });
  };
  React.useEffect(() => {
    categoryNews();
  });
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={newsStyle.backBtn}
        >
          <Ionicons name="arrow-back" size={25} color={"#fff"} />
        </Pressable>
        {loading ? (
          <NewsLoader />
        ) : (
          <ScrollView 
          ref={scrollRef}
          >
            <ImageBackground
              source={{
                uri: newsContent.image,
              }}
              // source={dummy}
              style={[
                StyleSheet.absoluteFill,
                {
                  width: SCREEN_WIDTH / 1,
                  height: SCREEN_HEIGHT / 2.3,
                },
              ]}
              resizeMode="cover"
            >
              <View
                style={{
                  width: SCREEN_WIDTH,
                  height: SCREEN_HEIGHT / 2.3,
                  backgroundColor: "rgba(0,0,0,0.25)",
                  justifyContent: "flex-end",
                  paddingHorizontal: SCREEN_WIDTH / 20,
                }}
              >
                <View style={{ marginBottom: SCREEN_HEIGHT / 70 }}>
                  <View
                    style={[
                      newsStyle.category,
                      {
                        width:
                          category.length <= 12
                            ? SCREEN_WIDTH / 3
                            : SCREEN_WIDTH / 2,
                      },
                    ]}
                  >
                    <Text style={newsStyle.categoryText}>
                      {newsContent.category.includes("economy" || "capital" || "business")
                        ? "Economy"
                        :newsContent.category}
                    </Text>
                  </View>
                  <Text style={newsStyle.newsHeader}>{newsContent.title}</Text>
                  <Text style={newsStyle.timePosted}>
                    &#128346;{timePosted(newsContent.time)}
                  </Text>
                </View>
              </View>
            </ImageBackground>

            <View
              style={{
                paddingHorizontal: SCREEN_WIDTH / 15,
                paddingVertical: SCREEN_WIDTH / 20,
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
                marginTop: SCREEN_HEIGHT / 2.5,
                width: SCREEN_WIDTH / 1,
                height: "100%",
                fontFamily: "Montserrat",
                backgroundColor: "#fff",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  fontFamily: "Montserrat",
                  lineHeight: 25,
                  color: "#000",
                  marginBottom: SCREEN_HEIGHT / 100,
                }}
              >
                {newsContent.content}
              </Text>
              <View
                style={{ /* height: SCREEN_HEIGHT / 10, */}}
              >
                <Text
                  style={{
                    color: "darkgray",
                    fontSize: 17,
                    fontWeight: "600",
                    fontFamily: "Montserrat",
                  }}
                >
                  You might like?
                </Text>

                {!categoryN ? (
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: "#000",
                      shadowRadius: 3,
                      shadowColor: "#111",
                      shadowOpacity: "0.5",
                      marginHorizontal: SCREEN_WIDTH / 20,
                      // height: 100,
                    }}
                  >
                    <Text>Failed to get categories</Text>
                  </View>
                ) : (
                  categoryN.map((item, idx) => (
                    <Pressable
                      key={idx}
                      onPress={()=>{
                        changeNewsContent(item)
                      }}
                      style={{ marginVertical: SCREEN_HEIGHT / 150 }}
                    >
                      {item.image != null ? (
                        <ImageBackground source={{ uri: item.image }}>
                          <Text>{item.title}</Text>
                        </ImageBackground>
                      ) : (
                        <Text>{item.title}</Text>
                      )}
                    </Pressable>
                  ))
                )}
              </View>
              <HrCenter>
                <Logo />
              </HrCenter>
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
}
