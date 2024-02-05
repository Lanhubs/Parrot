import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Pressable,
  Alert,
  ActivityIndicator,
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

export default function Details({route}) {

  const [news, usenews] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
const {read} = route.params


const fetchnews =async () =>{
  
  try {
    const response = await fetch('https://parrotnews.ng/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        uri: read,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      usenews(data);
      setLoading(false)
    } else {
      setLoading(false)
    }
  } catch (error) {
   Alert.alert("please kindly check your network and try again!")
  }
}
React.useEffect(()=>{
  fetchnews();
})
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
        {loading?<ActivityIndicator  size={"large"} />:
       <Text>{news}</Text>}
      </SafeAreaView>
    </>
  );
}
