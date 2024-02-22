import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview';

const ContactUs = () => {
  return (
    <WebView
    style={styles.container1}
    containerStyle={styles.container2}
    startInLoadingState={true}
    source={{ uri: "https://sites.google.com/view/parrotnews-contact-us" }}
  />
  )
}
const styles = StyleSheet.create({
    overview: {
      color: "darkgray",
      fontSize: 26,
      fontWeight: "bold",
    },
    overviewContainer: {
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      flex: 1,
    },
    container1: {
      flex: 1,
      justifyContent: "center",
      alignContent: "center",
      alignSelf: "center",
    },
    container2: {
      flex: 1,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },
  });

export default ContactUs