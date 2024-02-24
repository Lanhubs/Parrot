
import { Image, StyleSheet, View, Text, Linking, TouchableOpacity
,  Pressable,
  ScrollView,
} from "react-native";
import facebookIcon from "../../assets/images/facebook.png";
import privacyIcon from "../../assets/images/privacy.png";
import supportIcon from "../../assets/images/support.png";
import Logo from "../../components/UiKits/Logo";
import {
  profileStyles,
  settingsStyles,
} from "../../components/constants/style";
import SettingBtn from "../../components/UiKits/SettingBtn";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../components/constants/Ui_contants";
import HrCenter from "../../components/UiKits/HrCenter";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import newsImage from "../../components/UiKits/Logo";

export default function Settings({ route, navigation }) {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      var data = await AsyncStorage.getItem("Parrot");
      setData(JSON.parse(data));
    })();
  }, []);
  console.log(data);
  return (
    <ScrollView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View style={profileStyles.profilePicContainer}>
            <Logo style={{ width: SCREEN_WIDTH / 4.5 }} />
          </View>
        </View>
        <Pressable style={profileStyles.cameraIconBtn}>
          <Ionicons name="camera-outline" color="#000" size={25} />
        </Pressable>
        {data && (
          <Text style={[profileStyles.name, { color: "darkblue" }]}>
            {data.username}
          </Text>
        )}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: SCREEN_HEIGHT / 80,
            paddingBottom: SCREEN_HEIGHT / 100,
          }}
        >
          <Text style={settingsStyles.headerTitle}>Settings</Text>
        </View>
        <Text
          style={{
            marginHorizontal: SCREEN_WIDTH / 20,
            fontSize: 16,
            fontWeight: "500",
            marginBottom: SCREEN_HEIGHT / 80,
          }}
        >
          General settings
        </Text>
        {/* go notification button */}
        <SettingBtn
          label="Change password"
          iconLeft={<Ionicons name="keypad" size={20} />}
          iconRight={
            <FontAwesome
              name="angle-right"
              size={20}
              style={{ marginLeft: "auto" }}
            />
          }
        />
        <SettingBtn
          label="Notifications"
          iconLeft={<Ionicons name="notifications-outline" size={20} />}
          iconRight={
            <FontAwesome
              name="angle-right"
              size={20}
              style={{ marginLeft: "auto" }}
            />
          }
        />
        {/*  */}
        <SettingBtn
          label="Follow us on facebook"
          iconLeft={
            <Image
              source={facebookIcon}
              tintColor={"darkblue"}
              style={settingsStyles.buttonIcon}
            />
          }
          iconRight={
            <FontAwesome
              name="angle-right"
              size={20}
              style={{ marginLeft: "auto" }}
            />
          }
          handler={() => {
            Linking.openURL(
              "https://www.facebook.com/profile.php?id=61556073844225"
            );
          }}
        />
      <SettingBtn
        label="Timeline"
        iconLeft={
          <Ionicons name="alarm-outline" size={25} color={"darkblue"} />
        }
        iconRight={
          <FontAwesome
            name="angle-right"
            size={20}
            style={{ marginLeft: "auto" }}
          />
        }
      />
      <Text
        style={{
          marginHorizontal: SCREEN_WIDTH / 20,
          fontSize: 16,
          fontWeight: "500",
          marginBottom: SCREEN_HEIGHT / 80,
        }}
      >
        Support
      </Text>
      <SettingBtn
        label="Help / FAQ"
        iconLeft={
          <Image source={supportIcon} style={settingsStyles.buttonIcon} />
        }
        iconRight={
          <FontAwesome
            name="angle-right"
            size={20}
            style={{ marginLeft: "auto" }}
          />
        }
      />
      <TouchableOpacity onPress={ ()=>navigation.navigate("privacy")}>
     <Text>Click here to view Terms and condiction</Text>
      </TouchableOpacity>
      <SettingBtn
        label="Privacy and policy"
        iconLeft={
          <Image source={privacyIcon} style={settingsStyles.buttonIcon} />
        }
        iconRight={
          <FontAwesome
            name="angle-right"
            size={20}
            style={{ marginLeft: "auto" }}
          />
        }
      />
      <HrCenter>
        <Logo />
      </HrCenter>
    </SafeAreaView>
      <SettingBtn
          label="Timeline"
          iconLeft={
            <Ionicons name="alarm-outline" size={25} color={"darkblue"} />
          }
          iconRight={
            <FontAwesome
              name="angle-right"
              size={20}
              style={{ marginLeft: "auto" }}
            />
          }
        />
        <Text
          style={{
            marginHorizontal: SCREEN_WIDTH / 20,
            fontSize: 16,
            fontWeight: "500",
            marginBottom: SCREEN_HEIGHT / 80,
          }}
        >
          Support
        </Text>
        <SettingBtn
          label="Help / FAQ"
          iconLeft={
            <Image source={supportIcon} style={settingsStyles.buttonIcon} />
          }
          iconRight={
            <FontAwesome
              name="angle-right"
              size={20}
              style={{ marginLeft: "auto" }}
            />
          }
        />
        <SettingBtn
          label="Contact us"
          iconLeft={
            <Ionicons name="call-outline" size={25} color={"darkblue"} />
          }
          iconRight={
            <FontAwesome
              name="angle-right"
              size={20}
              style={{ marginLeft: "auto" }}
            />
          }
          handler={() => {
            navigation.navigate("contactus");
          }}
        />
        <SettingBtn
          label="Privacy and policy"
          iconLeft={
            <Image source={privacyIcon} style={settingsStyles.buttonIcon} />
          }
          iconRight={
            <FontAwesome
              name="angle-right"
              size={20}
              style={{ marginLeft: "auto" }}
            />
          }
          handler={() => {
            navigation.navigate("privacy");
          }}
        />
        <HrCenter>
          <Logo />
        </HrCenter>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
