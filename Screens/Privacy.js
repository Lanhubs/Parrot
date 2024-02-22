import { View, Text, StyleSheet, SafeAreaView} from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import Button from "../components/UiKits/Button";

const Privacy = () => {
  return (
    <SafeAreaView>
    <WebView
    style={styles.container1}
    containerStyle={styles.container2}
    startInLoadingState={true}
      source={{ uri: "https://facebook.com" }}
    />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  overview:{
      color:"darkgray",
      fontSize:26,
      fontWeight:"bold",
  },
  overviewContainer:{
      justifyContent:"center",
      alignContent:"center",
      alignItems:'center',
      flex:1,
  },
  container1:{
      flex:1,
      justifyContent:"center",
      alignContent:"center",
      alignSelf:"center"
  },
  container2:{
      flex:1,
      justifyContent:"center",
      alignContent:"center",
      alignItems:"center",
  }
})
export default Privacy;
