import { View, Text, Pressable, Alert } from "react-native";
import React, { useState } from "react";
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
  MEDIUM_RAD,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  firebase,
} from "../components/constants/Ui_contants";
import { router } from "expo-router";
import HrCenter from "../components/UiKits/HrCenter";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FlashMessage, { showMessage } from "react-native-flash-message";
const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const clickHandler = React.useCallback(() => {
    if (password === confirmPassword) {
      setLoading(true);

      fetch(firebase.SIGNUP_API_URL + firebase.apiKey, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      })
        .then(async (res) => {
          res.json
            
          
            
        }).then(async data=>{
          if (data?.idToken) {
            setLoading(false)
            showMessage({
              message: "registration successful",
              type: "success",
              style: FlashMessageStyle,
            });
            await AsyncStorage.setItem("Parrot", JSON.stringify(data));
            router.replace("/me");
          }
        })
        .catch((e) => {
          console.log(e);
          setLoading(false)
          showMessage({
            message: "registrations Failed",
            type: "danger",
            style: FlashMessageStyle,
          });
        })
        .finally(() => setLoading(false));
    } else {
      Alert.alert("password does not match!");
    }
  });
  return (
    <SafeAreaView style={authStyles.container}>
      <Text style={authStyles.headerText}>Sign up</Text>
      <Input
        label="Email"
        placeholder="jon@gmail.com"
        changeHandler={(e) => setEmail(e.target.value)}
      />
      <Input
        label="password"
        placeholder="***************"
        changeHandler={(e) => setPassword(e.target.value)}
      />
      <Input
        label="Confirm password"
        placeholder="***************"
        changeHandler={(e) => setConfirmPassword(e.target.value)}
      />
      <Button
        icon={<MaterialIcons color={"#fff"} name="login" size={25} />}
        title={"Create an account"}
        clickHandler={clickHandler}
        loading={loading}
      />
      <Text
        style={{
          marginHorizontal: SCREEN_WIDTH / 20,
          marginTop: SCREEN_HEIGHT / 80,
          textAlign: "center",
          fontWeight: "400",
          fontFamily: "Montserrat",
        }}
      >
        Already have an account?{" "}
      </Text>
      <Button
        icon={
          <MaterialCommunityIcons color={"#fff"} name="arrow-right" size={25} />
        }
        title={"Log in"}
        btnStyle={{
          backgroundColor: "#fff",
          borderWidth: 2,
          borderColor: "darkblue",
        }}
        textStyle={{
          color: "darkblue",
          marginRight: 0,
        }}
        clickHandler={() => router.replace("/login")}
      />
      <Pressable onPress={() => router.replace("/index")}>
        <HrCenter>
          <Logo
            style={{ width: SCREEN_WIDTH / 2, height: SCREEN_HEIGHT / 20 }}
          />
        </HrCenter>
      </Pressable>
      <FlashMessage position={"top"} />
    </SafeAreaView>
  );
};

export default Page;
