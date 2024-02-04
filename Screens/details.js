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

import NewsLoader from "../components/UiKits/NewsLoader";
import { Ionicons } from "@expo/vector-icons";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../components/constants/Ui_contants";
import Logo from "../components/UiKits/Logo";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/native";
export default function Details() {
  const route = useRoute();
  const params = route.params;
  const navigation = useNavigation();
  const [news, setNews] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const fetchContent = async () => {
    const route = useRoute();
    const params = route.params;
    setLoading(true);
    fetch(`https://parrotnews.ng`, {
      method: "POST",
      headers: {
        "Content-Type": "applicstion/json",
      },
      body: JSON.stringify({ uri: params.read }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setLoading(false);
          setNews(data);
        }
      })
      .catch((e) => console.log(e));
  };
  React.useEffect(() => {
    fetchContent();
    console.log(params);
  }, []);
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
        <View style={{ flex: 1 }}>
          {loading ? (
            <NewsLoader />
          ) : (
            <ScrollView>
              <>
                <Pressable
                  onPress={() => navigation.goBack()}
                  style={newsStyle.backBtn}
                >
                  <Ionicons name="arrow-back" size={25} color={"#fff"} />
                </Pressable>
                {params.image ? (
                  <ImageBackground
                    source={{
                      uri: params.image,
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
                                params?.category.length >= 10
                                  ? SCREEN_WIDTH / 1.5
                                  : SCREEN_WIDTH / 2.5,
                            },
                          ]}
                        >
                          <Text style={newsStyle.categoryText}>
                            {params?.category}
                          </Text>
                        </View>
                        <Text style={newsStyle.newsHeader}>
                          {params?.title}
                        </Text>
                        <Text style={newsStyle.timePosted}>{params.time}</Text>
                      </View>
                    </View>
                  </ImageBackground>
                ) : (
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
                              params.category.length >= 10
                                ? SCREEN_WIDTH / 1.5
                                : SCREEN_WIDTH / 2.5,
                          },
                        ]}
                      >
                        <Text style={newsStyle.categoryText}>
                          {params.category}
                        </Text>
                      </View>
                      <Text style={newsStyle.newsHeader}>{params.title}</Text>
                      <Text style={newsStyle.timePosted}>{params.time}</Text>
                    </View>
                  </View>
                )}

                <View style={newsStyle.newsContentContainer}>
                  {/* <Text style={newsStyle.newsContent}>{news}</Text> */}

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
        </View>
      </SafeAreaView>
    </>
  );
}
