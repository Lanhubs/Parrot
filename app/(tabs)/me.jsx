import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { profileStyles } from "@/components/constants/style";
import Profilebg from "../../components/UiKits/Profileg";
import profileData from "@/components/constants/profileData";
import { router } from "expo-router";
import ProfileControl from "../../components/UiKits/ProfileControl";
import ConfirmLogoutModal from "../../components/UiKits/ConfirmLogoutModal";
import { Fontisto, Ionicons } from "@expo/vector-icons";

import HrCenter from "../../components/UiKits/HrCenter";
import Logo from "@/components/UiKits/Logo";
import { SafeAreaView } from "react-native-safe-area-context";
import { SCREEN_WIDTH } from "@/components/constants/Ui_contants";
const Page = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <SafeAreaView style={profileStyles.container}>
      <Profilebg />
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View style={profileStyles.profilePicContainer}>
          {/* <Image
            source={newsImage}
            style={profileStyles.profilePic}
            resizeMode="cover"
          /> */}
          <Fontisto
            name="user-secret"
            style={profileStyles.profilePic}
            size={SCREEN_WIDTH / 2}
            color="white"
          />
        </View>
      </View>
      <Pressable style={profileStyles.cameraIconBtn}>
        <Ionicons name="camera-outline" color="#000" size={25} />
      </Pressable>
      <Text style={profileStyles.name}>John Doe</Text>
      <View style={profileStyles.controlsContainer}>
        {profileData.map((item, idx) => (
          <ProfileControl
            textColor={item.label === "Logout" && "rgba(220, 0, 0,0.6)"}
            key={idx}
            text={item.label}
            rightIcon={item.Icon}
            clickHandler={() => {
              if (item.label !== "Logout") {
                router.replace("");
              } else {
                setShowModal(true);
              }
            }}
          />
        ))}
      </View>
      <HrCenter>
        <Logo />
      </HrCenter>

      <ConfirmLogoutModal showModal={showModal} />
    </SafeAreaView>
  );
};

export default Page;
