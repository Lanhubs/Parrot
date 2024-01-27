import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Pressable,
  Modal,
  BackHandler,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Stack,
  router,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import NewsLoader from "../UiKits/NewsLoader";
import { Ionicons } from "@expo/vector-icons";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Ui_contants";

import Logo from "../UiKits/Logo";
import { NewsState } from "../Providers/NewsProviders";
import { newsStyle } from "../constants/style";
import axios from "axios";

export default function DetailsModal({ children, isOpen, setIsOpen }) {
  const { params } = NewsState();
  const [news, setNews] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const fetchContent = () => {
    setLoading(true);
    axios
      .get(`https://parrotnews.ng/?url=${params.url}`)
      .then((res) => {
        setLoading(false);
        console.log(data);
        setNews(res.data);
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
  React.useEffect(() => {
    const backBtnHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        setIsOpen(false);
      }
    );
    return () => backBtnHandler.remove();
  }, []);
  return (
    <>
      <Modal animationType="fade" visible={isOpen} transparent={true}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
          <View style={{flex: 1}}>
            {loading ? (
              <NewsLoader />
            ) : (
              <ScrollView>
                <>
                  <Pressable
                    onPress={() => setIsOpen(false)}
                    style={newsStyle.backBtn}
                  >
                    <Ionicons name="arrow-back" size={25} color={"#fff"} />
                  </Pressable>
                  {/* {params.image? (
                     <ImageBackground
                     source={{
                       uri: params.image,
                     }}
                     // source={dummy}
                     style={[
                       StyleSheet.absoluteFill,
                       { width: SCREEN_WIDTH / 1, height: SCREEN_HEIGHT / 2.3 },
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
                           {params?.headline}{" "}
                         </Text>
                         <Text style={newsStyle.timePosted}>{params?.time} </Text>
                       </View>
                     </View>
                   </ImageBackground>
                ):(
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
                          {params?.headline}{" "}
                        </Text>
                        <Text style={newsStyle.timePosted}>{params?.time} </Text>
                      </View>
                    </View>
                )} */}

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
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
}
