import NewsHeadlineCard from "../../components/UiKits/NewsHeadlineCard";
import NewsTypeScroll, {
  clickedStyle,
  newsType,
  unClickedStyle,
} from "../../components/UiKits/NewsTypeScroll";
import { homeStyles } from "../../components/constants/style";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FirstNewsHeadline from "../../components/UiKits/FirstNewsHeadline";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  // ADMOB_CONFIG,
  MEDIUM_RAD,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../components/constants/Ui_contants";
import React, { useEffect, useState } from "react";

import NewsLoader from "../../components/UiKits/NewsLoader";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Logo from "../../components/UiKits/Logo";
// import {
//   BannerAd,
//   TestIds,
//   BannerAdSize,
//   InterstitialAd,
//   AdEventType,
// } from "react-native-google-mobile-ads";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  var navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const [firstHeadline, setFirstHeadline] = React.useState({});

  const [index, setIndex] = React.useState(0);
  const [data, setData] = useState([]);
  const [readDetails, setReadDetails] = React.useState(false);
  /* const interstitial = InterstitialAd.createForAdRequest(ADMOB_CONFIG.insterStitiaAd, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ["football", "fashion", "clothing"]
  }) */
  const onScroll = (e) => {
    const verticalOffset = e.nativeEvent.contentOffset.y;
    if (verticalOffset === 0) {
      parent.setOptions({
        tabBarStyle: {
          display: "none",
        },
      });
    } else {
      parent.setOptions({
        tabBarStyle: {
          display: "flex",
        },
      });
    }
  };
  const fetchNews = (news) => {
    setIsLoading(true);

    fetch(`/api/${news}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setData(data);
          setIsLoading(false);
        }
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e);
      });
    setIsLoading(false);
  };
  const newsfetch = () => {
    setIsLoading(true);
    fetch(`https://parrotnews.ng/api`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setFirstHeadline(data[0]);
        setData(data.filter((elem, idx) => idx > 1 && idx <= 20));
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e);
      });

    setIsLoading(false);
  };
  useEffect(() => {
    newsfetch();
  }, []);
  // interstitial ad
  // useEffect(()=>{
  //   interstitial.load()
  //   setTimeout(()=>{interstitial.show()}, 3000)
  // }, [])
  return (
    <SafeAreaView style={homeStyles.container}>
      {/* header */}
      <Header />

      {isLoading ? (
        <NewsLoader />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={true}
          // onScroll={onScroll}
          scrollEnabled={true}
          scrollEventThrottle={20}
        >
          <ScrollView
            horizontal={true}
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              height: SCREEN_HEIGHT / 20,
              marginLeft: SCREEN_WIDTH / 20,
              paddingVertical: SCREEN_HEIGHT / 70,
            }}
          >
            {newsType.map((item, idx) => (
              <Pressable
                key={idx}
                onPress={() => {
                  fetchNews(item);
                  setIndex(idx);
                }}
                style={{
                  marginRight: SCREEN_WIDTH / 20,
                }}
              >
                <Text
                  style={[
                    idx === 0 ? clickedStyle : unClickedStyle,
                    {
                      textTransform: "capitalize",
                      fontFamily: "Montserrat",
                    },
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            ))}
          </ScrollView>

          <FirstNewsHeadline
            category={firstHeadline.category}
            headline={firstHeadline.title}
            image={firstHeadline.image}
            link={firstHeadline.url}
            timePosted={firstHeadline.date}
            newsHandler={() => {
              navigation.navigate(`details`, {
                read: firstHeadline.read,
                category: firstHeadline.category,
                image: firstHeadline.image ? firstHeadline.image : "",
                title: firstHeadline.title,
                time: firstHeadline.date,
              });
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              marginHorizontal: SCREEN_WIDTH / 20,
              marginTop: SCREEN_HEIGHT / 90,
            }}
          >
            Latests
          </Text>
          <View
            style={{ flex: 1, width: SCREEN_WIDTH / 1, alignItems: "center" }}
          >
            {data.map((item, idx) => {
              return (
                <NewsHeadlineCard
                  title={item?.title}
                  timePosted={item?.date}
                  image={item?.image}
                  key={idx}
                  newsHandler={() => {
                    navigation.navigate(`details`, {
                      read: item?.read,
                      category: item?.category,
                      image: item.image ? item.image : "",
                      title: item?.title,
                      time: item?.date,
                    });
                  }}
                />
              );
            })}
          </View>
        </ScrollView>
      )}

      {/*{Platform.OS === "android" || Platform.OS === "ios" && (
        <BannerAd
          unitId={ADMOB_CONFIG.adUnitAd}
          requestOptions={{ requestNonPersonalizedAdsOnly: true }}
          size={BannerAdSize.FULL_BANNER}
          onAdLoaded={() => {
            setIsLoading(true);
          }}
        />
        ) }*/}
    </SafeAreaView>
  );
}
const Header = () => (
  <View
    style={{
      flexDirection: "row",
      paddingHorizontal: SCREEN_WIDTH / 20,
      backgroundColor: "#fff",
      paddingTop: SCREEN_HEIGHT / 60,
      justifyContent: "space-between",
    }}
  >
    <Pressable style={{}}>
      <MaterialCommunityIcons name="segment" size={25} color="darkblue" />
    </Pressable>
    <Logo style={{ marginVertical: "inherit", marginHorizontal: 0 }} />
    <Pressable>
      <Ionicons name="search" color="darkblue" size={25} />
    </Pressable>
  </View>
);
