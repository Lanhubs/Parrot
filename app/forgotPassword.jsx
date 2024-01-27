import { View, Text, Pressable } from "react-native";
import React from "react";
import { FlashMessageStyle, authStyles } from "../components/constants/style";
import Input from "../components/UiKits/Input";
import Button from "../components/UiKits/Button";
import {
  EvilIcons,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import Logo from "../components/UiKits/Logo";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  firebase,
} from "../components/constants/Ui_contants";
import { router, useNavigation } from "expo-router";
import HrCenter from "../components/UiKits/HrCenter";
import { SafeAreaView } from "react-native-safe-area-context";
import FlashMessage, { showMessage } from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Page = () => {
  // const navigation = useNavigation()
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const clickHandler = () => {
    setLoading(true);

    fetch(firebase.LOGIN_API_URL + firebase.apiKey, {
      method: "POST",
      body: JSON.stringify({
        email,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res) => {
        if (res.ok) {
          const token = await res.json();
          showMessage({
            message: "Successufly Lgin!",
            type: "success",
            animated: true,
            style: FlashMessageStyle,
          });
          await AsyncStorage.setItem("Parrot", JSON.stringify(token));
          router.replace("/me");
        }
      })
      .catch((er) => {
        showMessage({
          message: "Ivalid details provide!",
          type: "danger",
          style: FlashMessageStyle,
        });
      })
      .finally(() => setLoading(false));
  };
  return (
    <SafeAreaView style={[authStyles.container, {alignContent: "center"}]}>
      <Text style={authStyles.headerText}>Recover password</Text>
      <Input
        label="Email"
        placeholder="jon@gmail.com"
        changeHandler={(e) => setEmail(e.target.value)}
      />

      <Button
        icon={<MaterialIcons color={"#fff"} name="login" size={25} />}
        title={"Recover password"}
        clickHandler={clickHandler}
        loading={loading}
      />
      <FlashMessage position={"top"} />

      <HrCenter>
        <Logo style={{ width: SCREEN_WIDTH / 2, height: SCREEN_HEIGHT / 20 }} />
      </HrCenter>
    </SafeAreaView>
  );
};

export default Page;
