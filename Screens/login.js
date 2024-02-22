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
import HrCenter from "../components/UiKits/HrCenter";
import { SafeAreaView } from "react-native-safe-area-context";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();
  const clickHandler = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://parrotnews.ng/login`, {
        method: "POST",
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password:password.trim(),
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data)
      if (res.status === 200) {
        setLoading(false);
        showMessage({
          message: "logged in successful",
          type: "success",
          style: FlashMessageStyle,
        });
        await AsyncStorage.setItem("Parrot", JSON.stringify(data));
        navigation.navigate("login");
      } else if (res.status === 401) {
        showMessage({
          message: data.message,
          type: "danger",
          style: FlashMessageStyle,
        });
      }
    } catch (err) {
      showMessage({
        message: "Ivalid details provide!",
        type: "danger",
        animated: true,
        style: FlashMessageStyle,
      });
    }
  };
  return (
    <>
      <SafeAreaView style={authStyles.container}>
        <Text style={authStyles.headerText}>Log in</Text>
        <Input
          label="Email"
          placeholder="jon@gmail.com"
          changeHandler={(text) => {
            
            setEmail(text);
          }}
        />
        <Input
          label="password"
          placeholder="***************"
          changeHandler={(text) => {
            
            setPassword(text);
          }}
        />
        <View
          style={{
            marginHorizontal: SCREEN_WIDTH / 20,
            marginTop: SCREEN_HEIGHT / 80,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontFamily: "Montserrat",
            }}
          >
            Forgot your password?
          </Text>
          <Pressable
            style={{ marginLeft: SCREEN_WIDTH / 30 }}
            onPress={() => navigation.navigate("forgotPassword")}
          >
            <Text
              style={{
                color: "darkblue",
                fontWeight: "600",
                fontFamily: "Montserrat",
              }}
            >
              Recover it
            </Text>
          </Pressable>
        </View>
        <Button
          icon={<MaterialIcons color={"#fff"} name="login" size={25} />}
          title={"Log in"}
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
          Don't have an account?{" "}
        </Text>
        <Button
          icon={
            <MaterialCommunityIcons
              color={"#fff"}
              name="arrow-right"
              size={25}
            />
          }
          title={"Create an account"}
          btnStyle={{
            backgroundColor: "#fff",
            borderWidth: 2,
            borderColor: "darkblue",
          }}
          textStyle={{
            color: "darkblue",
            marginRight: 0,
          }}
          clickHandler={() => navigation.navigate("signup")}
        />
        <HrCenter>
          <Logo
            style={{ width: SCREEN_WIDTH / 2, height: SCREEN_HEIGHT / 20 }}
          />
        </HrCenter>
        <FlashMessage position={"top"} />
      </SafeAreaView>
    </>
  );
}

export default Login;
