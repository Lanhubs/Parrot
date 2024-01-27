import NewsHeadlineCard from "@/components/UiKits/NewsHeadlineCard";
import NewsTypeScroll, {
  clickedStyle,
  newsType,
  unClickedStyle,
} from "@/components/UiKits/NewsTypeScroll";
import { homeStyles } from "@/components/constants/style";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FirstNewsHeadline from "@/components/UiKits/FirstNewsHeadline";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ADMOB_CONFIG,
  MEDIUM_RAD,
  MOCK_NEWS,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "@/components/constants/Ui_contants";
import { Link, router, useNavigation, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { NewsState } from "@/components/Providers/NewsProviders";

import NewsLoader from "../../components/UiKits/NewsLoader";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Logo from "@/components/UiKits/Logo";
import {
  BannerAd,
  TestIds,
  BannerAdSize,
  InterstitialAd,
  AdEventType,
} from "react-native-google-mobile-ads";
const adUnitAd = __DEV__
  ? TestIds.BANNER
 : "ca-app-pub-2672084441882438/7622608608";
import DetailsModal from "../../components/Templates/DetailsModal";
export default function Page() {
  var navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [adLoaded, setAdLoaded] = useState(false);
  const parent = navigation.getParent();
  const [firstHeadline, setFirstHeadline] = React.useState({});
  const { setParams } = NewsState();
  const [index, setIndex] = React.useState(0);
  const router = useRouter();
  const [data, setData] = useState([]);
  const [readDetails, setReadDetails] = React.useState(false);
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

    fetch(`https://parrotnews.ng/${news}`)
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
        setData(data.filter((elem, idx) => idx > 1 && idx <= 15));
        setFirstHeadline(data[0]);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
    setIsLoading(false);
 
  };
  useEffect(() => {
    newsfetch();
  }, []);
  return (
    <SafeAreaView style={homeStyles.container}>
      {/* header */}
      <Header />

      {isLoading ? (
        <NewsLoader />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={true}
          onScroll={onScroll}
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
                      textTransform: "capitalize", fontFamily: "Montserrat"
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
              setParams({
                url: firstHeadline.read,
                image: firstHeadline.image,
                category: firstHeadline.category,
                headline: firstHeadline.title,
                time: firstHeadline.date,
              });
              setReadDetails(true);
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
                    setParams({
                      url: item?.read,
                      image: item?.image,
                      category: item?.category,
                      headline: item?.title,
                      time: item?.date,
                    });
                    setReadDetails(true);
                  }}
                  // newsHandler={`/details?url=${item?.read}&category=${item?.category}&image=${item?.image}&headline=${item?.title}&time=${item?.time}`}
                />
              );
            })}
          </View>
        </ScrollView>
      )}
      <DetailsModal isOpen={readDetails} setIsOpen={setReadDetails} />
      {Platform.OS === "android" || Platform.OS === "ios" ? (
        <BannerAd
          unitId={ADMOB_CONFIG.adUnitAd}
          requestOptions={{ requestNonPersonalizedAdsOnly: true }}
          size={BannerAdSize.FULL_BANNER}
          onAdLoaded={() => {
            setIsLoading(true);
          }}
        />
      ) : null}
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
