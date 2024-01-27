import { View, Text, Modal, StyleSheet, Pressable } from "react-native";
import React from "react";
import {
  MEDIUM_RAD,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../constants/Ui_contants";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const ConfirmLogoutModal = (props) => {
  return (
    <Modal visible={props.showModal} transparent={true} animationType="slide">
      <View style={{ backgroundColor: "rgba(0,0,0,0.5)", flex: 1 }}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>
            Are you sure you want to logout your account ?
          </Text>
          <Pressable
            style={styles.modalBtn}
            onPress={() => router.replace("/login")}
          >
            <Text
              style={{
                color: "#f2f2f2",
                fontFamily: "Montserrat",
                fontSize: 18,
              }}
            >
              Logout
            </Text>

            <Ionicons
              name="log-out-outline"
              size={25}
              color={"#f2f2f2"}
              style={{ marginLeft: SCREEN_WIDTH / 20 }}
            />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    paddingTop: SCREEN_WIDTH / 15,
    marginTop: "auto",
    height: SCREEN_HEIGHT / 3.5,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopRightRadius: SCREEN_WIDTH/20,
    borderTopLeftRadius: SCREEN_WIDTH/20

  },
  modalText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 30,
    fontFamily: "Montserrat",
    width: SCREEN_WIDTH - SCREEN_WIDTH / 6,
    color: "rgba(0,0,139, 0.8)"
  },
  modalBtn: {
    backgroundColor: "rgba(255, 0,0,0.9)",
    width: SCREEN_WIDTH - SCREEN_WIDTH / 4,
    height: SCREEN_HEIGHT / 15,
    borderRadius: MEDIUM_RAD,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: SCREEN_HEIGHT / 40,
  },
});
export default ConfirmLogoutModal;
