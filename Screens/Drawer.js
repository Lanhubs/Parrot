// App.js
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import {
  SafeAreaView,
  View,
  Image,
  Text,
  Modal,
  Pressable,
  StyleSheet,
} from "react-native";
import DraweritemComponent from "../components/UiKits/DrawerItem";
import { Ionicons } from "@expo/vector-icons";
import { profileStyles } from "../components/constants/style";
import Logo from "../components/UiKits/Logo";
import { SCREEN_WIDTH } from "../components/constants/Ui_contants";

import supportIcon from "../assets/images/support.png";
import facebookIcon from "../assets/images/facebook.png";
import privacyIcon from "../assets/images/privacy.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HrCenter from "../components/UiKits/HrCenter";
// import Animated, { SlideInLeft } from "react-native-reanimated";

const CustomHeader = ({ navigation }) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      var data = await AsyncStorage.getItem("Parrot");
      setData(JSON.parse(data));
    })();
  }, [data]);
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={[profileStyles.profilePicContainer]}>
          <Logo style={{ width: SCREEN_WIDTH / 4.5 }} />
        </View>
      </View>
      {data && (
        <Text
          style={{ fontSize: 18, fontWeight: "600", fontFamily: "Montserrat" }}
        >
          {data?.username}
        </Text>
      )}
    </SafeAreaView>
  );
};

const Drawer = (props) => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Pressable onPress={() => setIsOpen(true)}>{props.children}</Pressable>
      <Modal
        visible={isOpen}
        transparent={true}
        style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={() => setIsOpen(false)}
          />
          <View
            style={{
              backgroundColor: "#fff",
              width: SCREEN_WIDTH - SCREEN_WIDTH / 4,
              marginLeft: 0,
              marginTop: 0,
              zIndex: 2,
              flex: 1,
            }}
            // {...props}
          >
            <Pressable
              style={{
                // position: "absolute",
                marginTop: SCREEN_WIDTH / 80,
                marginRight: SCREEN_WIDTH / 20,
                marginLeft: "auto",
              }}
            >
              <Ionicons name="close-outline" size={30} color="darkblue" />
            </Pressable>
            <CustomHeader navigation={navigation} />

            {/* setting btn */}

            <DraweritemComponent
              icon={
                <Ionicons name="person-outline" size={25} color="darkblue" />
              }
              label="profile"
              onPress={() =>
                navigation.navigate("tabs", {
                  screen: "settings",
                })
              }
            />

            {/*  */}

            <DraweritemComponent
              label={"Settings"}
              icon={
                <Ionicons name="settings-outline" size={25} color="darkblue" />
              }
              onPress={() =>
                navigation.navigate("tabs", {
                  screen: "settings",
                })
              }
            />

            <DraweritemComponent
              label={"Help / FAQ"}
              icon={
                <Image
                  source={supportIcon}
                  style={{ width: 25, height: 25 }}
                  tintColor={"darkblue"}
                />
              }
            />

            <DraweritemComponent
              label="Follow us on Facebook"
              icon={
                <Image
                  source={facebookIcon}
                  tintColor={"darkblue"}
                  style={{ width: 25, height: 25 }}
                />
              }
            />

            <DraweritemComponent
              label="contact us"
              icon={
                <Ionicons name="call-outline" size={25} color={"darkblue"} />
              }
              onPress={() => navigation.navigate("contactus")}
            />

            <DraweritemComponent
              label="Privacy policy"
              icon={
                <Image source={privacyIcon} style={{ width: 25, height: 25 }} />
              }
              onPress={() => navigation.navigate("privacy")}
            />

            <DraweritemComponent
              color={"rgba(255,0,0,0.5)"}
              label={"Log out"}
              icon={
                <Ionicons
                  name="log-out-outline"
                  size={25}
                  color="rgba(255,0,0,0.5)"
                />
              }
              onPress={() => navigation.navigate("login")}
            />

            <HrCenter>
              <Logo />
            </HrCenter>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default Drawer;
