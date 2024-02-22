import { View, Text, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import Input from "../components/UiKits/Input";
import Button from "../components/UiKits/Button";
import {
  EvilIcons,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

import {
  MEDIUM_RAD,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  firebase,
} from "../components/constants/Ui_contants";
import HrCenter from "../components/UiKits/HrCenter";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import { FlashMessageStyle, authStyles } from "../components/constants/style";
import Logo from "../components/UiKits/Logo";
import axios from "axios";
function SignUp({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const clickHandler = async () => {
    if (password === confirmPassword) {
      const userData = {
        email: email.trim().toLowerCase(),
        password: password.trim(),
        username: username.trim().toLowerCase(),
      }
      try {
        setLoading(true);
        const res = await fetch("https://parrotnews.ng/signup", {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData)
        });
        const data = await res.json();
        console.log(data);
        // if (res.status === 201) {
        //   setLoading(false);
        //   showMessage({
        //     message: "registration successful",
        //     type: "success",
        //     style: FlashMessageStyle,
        //   });
        //   navigation.navigate("login");
        // } else if (res.status === 415) {
        //   setLoading(false);
        //   showMessage({
        //     message: "username and password is required",
        //     type: "danger",
        //     style: FlashMessageStyle,
        //   });
        // } else if (res.status === 400) {
        //   setLoading(false);
        //   showMessage({
        //     message: "username already exist",
        //     type: "danger",
        //     style: FlashMessageStyle,
        //   });
        // }
      } catch (error) {
        console.log(error)
        showMessage({
          message: "error occurred retry",
          type: "danger",
          style: FlashMessageStyle,
        });
      }
    } else {
      showMessage({
        message: "your passwords don't seem to match",
        type: "danger",
        style: FlashMessageStyle,
      });
    }
  }
  return (
    <SafeAreaView style={authStyles.container}>
      <Text style={authStyles.headerText}>Sign up</Text>
      <Input
        label="Email"
        placeholder="jon@gmail.com"
        changeHandler={(text) => {
          

          setEmail(text);
        }}
      />
      <Input
        label="Username"
        placeholder="parroty"
        changeHandler={(text) => {
          
          setUsername(text);
        }}
      />
      <Input
        label="password"
        placeholder="***************"
        changeHandler={(text) => {
          

          setPassword(text);
        }}
      />
      <Input
        label="Confirm password"
        placeholder="***************"
        changeHandler={(text) => {
          

          setConfirmPassword(text);
        }}
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
        clickHandler={() => navigation.navigate("login")}
      />
        <HrCenter>
          <Logo
            style={{ width: SCREEN_WIDTH / 2, height: SCREEN_HEIGHT / 20 }}
          />
        </HrCenter>
      {/* <Pressable onPress={() => navigation.navigate("index")}>
      </Pressable> */}
      <FlashMessage position={"top"} />
    </SafeAreaView>
  );
}

export default SignUp;
