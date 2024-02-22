import { View, Text, Modal, ActivityIndicator } from "react-native";
import React from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Ui_contants";
import Logo from "./Logo";

const LoaderModal = (props) => {
  return (
    <Modal transparent={true} visible={props.loading}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <Logo
          style={{
            width: SCREEN_WIDTH / 2,
            height: SCREEN_HEIGHT / 25,
          }}
        />
        <View style={{ marginTop: SCREEN_HEIGHT / 90, flexDirection: "row", alignItems: 'center', justifyContent: "center" , width: SCREEN_WIDTH-40}}>
          <ActivityIndicator
            animating={true}
            size={"small"}
            color={"rgba(0,0,139,0.8)"}
          />
          <Text
            style={{
              marginLeft: 10,
              fontFamily: "600",
              fontSize: 15,
              fontFamily: "Montserrat",
              color: "rgba(0,0,139,0.8)",
            }}
          >
            Fetching your news
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default LoaderModal;
