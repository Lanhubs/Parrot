import { Image, StyleSheet, View, Text, } from "react-native";
import facebookIcon from "../../assets/images/facebook.png";
import twitterIcon from "../../assets/images/twitter.png";
import supportIcon from "../../assets/images/support.png";
import Logo from "../../components/UiKits/Logo";
import { settingsStyles } from "../../components/constants/style";
import SettingBtn from "../../components/UiKits/SettingBtn";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../components/constants/Ui_contants";
import HrCenter from "../../components/UiKits/HrCenter";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: SCREEN_HEIGHT/80,
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
          <Image source={facebookIcon} style={settingsStyles.buttonIcon} />
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
        iconLeft={
          <Image
            source={twitterIcon}
            tintColor={"darkblue"}
            style={[settingsStyles.buttonIcon]}
          />
        }
        label="Follow us on Twitter"
        iconRight={
          <FontAwesome
            name="angle-right"
            size={20}
            style={{ marginLeft: "auto" }}
          />
        }
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
      <SettingBtn
        label="Contact us"
        iconLeft={<Ionicons name="call-outline" size={25} color={"darkblue"} />}
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
