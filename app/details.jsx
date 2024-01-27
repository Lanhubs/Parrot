import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { newsStyle } from "../components/constants/style";
import {
  Stack,
  router,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import NewsLoader from "../components/UiKits/NewsLoader";
import { Ionicons } from "@expo/vector-icons";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../components/constants/Ui_contants";
import dummy from "../assets/images/dummy.jpeg";
import Logo from "../components/UiKits/Logo";
const Page = () => {
  const params = useLocalSearchParams();
  const [news, setNews] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const fetchContent = () => {
    setLoading(true);
    fetch(`https://parrotnews.ng/?url=${params.url}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setNews(data);
      })
      .catch((e) => {
        setLoading(false);
        // setNews(JSON.stringify(e));
        console.log(e);
      });
  };
  React.useEffect(() => {
    fetchContent();
  }, []);
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        {loading ? (
          <NewsLoader />
        ) : (
          <ScrollView>
            <>
              <Pressable
                onPress={() => router.replace("/(tabs)/index")}
                style={newsStyle.backBtn}
              >
                <Ionicons name="arrow-back" size={25} color={"#fff"} />
              </Pressable>
              <ImageBackground
                source={{
                  uri: params?.image,
                }}
                // source={dummy}
                style={[
                  StyleSheet.absoluteFill,
                  { width: SCREEN_WIDTH, height: SCREEN_HEIGHT / 2.3 },
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
                    <View style={newsStyle.category}>
                      <Text style={newsStyle.categoryText}>{params?.category}</Text>
                    </View>
                    <Text style={newsStyle.newsHeader}>{params?.headline} </Text>
                    <Text style={newsStyle.timePosted}>{params?.time} </Text>
                  </View>
                </View>
              </ImageBackground>
              <View style={newsStyle.newsContentContainer}>
                <Text style={newsStyle.newsContent}>{news}</Text>
                <Logo
                  style={{
                    width: SCREEN_WIDTH / 1.5,
                    height: SCREEN_HEIGHT / 30,
                  }}
                />
              </View>
            </>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};

export default Page;
