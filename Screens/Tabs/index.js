import NewsHeadlineCard from "../../components/UiKits/NewsHeadlineCard";
import NewsTypeScroll, {
  clickedStyle,
  newsType,
  unClickedStyle,
} from "../../components/UiKits/NewsTypeScroll";
import { homeStyles } from "../../components/constants/style";
import {
  RefreshControl,
  Alert,
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
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Logo from "../../components/UiKits/Logo";
import { useNavigation } from "@react-navigation/native";
import LoaderModal from "../../components/UiKits/LoaderModal";
import Drawer from "../Drawer";
export default function Home() {

  const time = (time) => {
    date = new Date(time)
    return { "year": date.getFullYear(), "month": date.toLocaleString('en-US', { month: 'long' }), "day": date.getDate(), "time": date.getHours(), "sec": date.getMinutes(), "hous": date.getHours >= 12 ? "PM" : "AM" }

}



  const   adUnitAd= __DEV__ ? TestIds.BANNER : "ca-app-pub-2672084441882438/7622608608"

  var navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [firstHeadline, setFirstHeadline] = React.useState({});
  const [index, setIndex] = React.useState(0);
  const [data, setData] = useState([]);
  const [readDetails, setReadDetails] = React.useState(false);
 const interstitial = interstitial.createForAdRequest(ADMOB_CONFIG.insterStitiaAd, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ["football", "fashion", "clothing"]
  }) 
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
  const fetchNews = async (news) => {
    try {
      setIsLoading(true);
      const res = await fetch(`https://parrotnews.ng/${news}`);
      const data = await res.json();
      if (res.ok) {
        setFirstHeadline(data[0]);
        setData(data.filter((elem, idx) => idx > 1 && idx <= 20));
        setIsLoading(false);
      }
    } catch (e) {
      setIsLoading(false);
      Alert.alert("Check your internet connection", _, _, {
        userInterfaceStyle: "unspecified",
      });
      console.log(e);
    }
  };
  const newsfetch = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(`https://parrotnews.ng/news`);
      const data = await res.json();
      if (res.ok) {
        setFirstHeadline(data[0]);
        setData(data.filter((elem, idx) => idx > 1 && idx <= 20));
        setIsLoading(false);
      }
    } catch (e) {
      setIsLoading(false);
      Alert.alert("Check your internet connection");
      console.log(e);
    }
  };
  useEffect(() => {
    newsfetch();
  }, []);
  // interstitial ad
  useEffect(()=>{
    interstitial.load()
    setTimeout(()=>{interstitial.show()}, 3000)
  }, [])
  return (
    <SafeAreaView style={homeStyles.container}>
      {/* header */}
      <Header />

      <ScrollView
        refreshControl={
          <RefreshControl
            colors={["darkblue"]}
            refreshing={isLoading}
            onRefresh={newsfetch}
          />
        }
        showsVerticalScrollIndicator={true}
        // onScroll={onScroll}
        scrollEnabled={true}
        scrollEventThrottle={20}
      >
        <NewsTypeScroll fetchNews={fetchNews} />

        <FirstNewsHeadline
          category={firstHeadline.category}
          headline={firstHeadline.title}
          image={firstHeadline.image}
          link={firstHeadline.url}
          timePosted={time(firstHeadline.date)}
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
                timePosted={time(item?.date)}
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
      {isLoading ? <LoaderModal loading={isLoading} /> : null}
      <BannerAd
        unitId={adUnitAd}
        requestOptions={{ requestNonPersonalizedAdsOnly: true }}
        size={BannerAdSize.FULL_BANNER}
        onAdLoaded={() => {
          setIsLoading(true);
        }}
      />
    </SafeAreaView>
  );
}
const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: SCREEN_WIDTH / 20,
        backgroundColor: "#fff",
        paddingTop: SCREEN_HEIGHT / 60,
        justifyContent: "space-between",
      }}
    >
      <Drawer>
        <View>
          <MaterialCommunityIcons name="segment" size={25} color="darkblue" />
        </View>
      </Drawer>
      <Logo style={{ marginVertical: "inherit", marginHorizontal: 0 }} />
      <Pressable>
        <Ionicons name="notifications-outline" color="darkblue" size={25} />
      </Pressable>
    </View>
  );
};
