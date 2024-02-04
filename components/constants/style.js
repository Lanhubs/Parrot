import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH, MEDIUM_RAD, TAB_WIDTH } from "./Ui_contants";

const { create } = StyleSheet;
export const authStyles = create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddinTop: SCREEN_HEIGHT / 15,
  },
  headerText: {
    // textAlign: "center",
    marginHorizontal: SCREEN_WIDTH / 20,
    marginVertical: SCREEN_HEIGHT / 50,
    fontSize: 35,
    fontWeight: "500",
    fontFamily: "Montserrat",
  },
  inputContainer: {
    marginHorizontal: SCREEN_WIDTH / 20,
    marginTop: SCREEN_HEIGHT / 40,
  },
  input: {
    height: SCREEN_HEIGHT / 14,
    padding: 10,
    borderRadius: MEDIUM_RAD,

    borderWidth: 1.8,
    borderColor: "darkblue",
    marginTop: SCREEN_WIDTH / 80,
  },
  label: {
    fontSize: 14,
    fontFamily: "Montserrat",
    color: "darkblue",
    textTransform: "capitalize",
    fontWeight: "500",
    marginBottom: SCREEN_HEIGHT / 100,
  },
  button: {
    marginHorizontal: SCREEN_WIDTH / 20,
    marginTop: SCREEN_HEIGHT / 40,
    height: SCREEN_HEIGHT / 14,
    backgroundColor: "darkblue",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: MEDIUM_RAD,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Montserrat",
    marginRight: SCREEN_WIDTH / 20,
  },
});

export const homeStyles = create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddinTop: SCREEN_HEIGHT / 15,
  },
});
export const profileStyles = create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  cameraIconBtn: {
    width: SCREEN_WIDTH / 10,
    height: SCREEN_WIDTH / 10,
    position: "absolute",
    zIndex: 100,
    borderRadius: SCREEN_WIDTH / 10,
    top: SCREEN_HEIGHT / 7.95,
    backgroundColor: "#fff",
    left: SCREEN_WIDTH - SCREEN_WIDTH / 2.1,
    alignItems: "center",
    justifyContent: "center",
  },
  profilePicContainer: {
    width: SCREEN_WIDTH / 4,
    height: SCREEN_WIDTH / 4,
    borderRadius: SCREEN_WIDTH / 2,
    overflow: "hidden",
    marginHorizontal: "auto",
    marginTop: SCREEN_HEIGHT / 20,
    borderWidth: 3,
    borderColor: "#f2f2f2",
  },
  profilePic: {
    flex: 1,
    // width: SCREEN_WIDTH / 4,
    // height: SCREEN_WIDTH / 4,
    borderRadius: SCREEN_WIDTH / 2,
  },
  name: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Montserrat",
    marginVertical: SCREEN_HEIGHT / 80,
    color: "#fff",
    marginHorizontal: "auto",
  },
  controlsContainer: {
    borderRadius: MEDIUM_RAD,
    marginHorizontal: SCREEN_WIDTH / 20,
    backgroundColor: "#fff",
    marginTop: SCREEN_HEIGHT / 30,
    boxShadow: "2px 0.5px 2px rgba(0,0,0,0.3)",
    flex: 1,
    // shadowColor: "rgba(0,0,0,0.3)",
    // shadowOffset: { width: 2, height: 0.5 },
    // shadowOpacity: 0.5,
    // shadowRadius: 9,
  },
  controlContainer: {
    flexDirection: "row",
    borderBottomColor: "rgba(0,0,137, 0.4)",
    alignItems: "center",
    paddingVertical: SCREEN_HEIGHT / 50,
    paddingHorizontal: SCREEN_WIDTH / 30,
    borderBottomWidth: 1.5,
  },
  controllerText: {
    color: "darkblue",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Montserrat",
    marginLeft: SCREEN_WIDTH / 30,
  },
  controllerIcon: {
    width: 20,
    height: 20,
    // tintColor: "darkblue",
  },
});
export const settingsStyles = create({
  container: {
    flex: 1,
    paddinTop: SCREEN_HEIGHT / 15,
  },
  button: {
    paddingHorizontal: SCREEN_WIDTH / 20,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: SCREEN_HEIGHT / 50,
    fontFamily: "Montserrat",
    color: "darkblue",
  },
  buttonIcon: {
    width: 25,
    height: 25,
  },
  buttonLabel: {
    marginLeft: SCREEN_WIDTH / 20,
    fontWeight: "500",
  },
  switchBtn: {},
  headerTitle: {
    marginHorizontal: "auto",
    marginVertical: SCREEN_HEIGHT / 90,
    fontFamily: "Montserrat",
    fontSize: 18,
  },
});

export const newsStyle = create({
  container: {
    flex: 1,
    paddinTop: SCREEN_HEIGHT / 15,
    backgroundColor: "#fff",
  },
  backBtn: {
    position: "absolute",
    top: SCREEN_WIDTH / 20,
    left: SCREEN_WIDTH / 15,
    zIndex: 100,
  },
  image: {
    height: SCREEN_HEIGHT / 2.3,
    paddingHorizontal: SCREEN_WIDTH / 20,
    width: SCREEN_WIDTH/1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: SCREEN_WIDTH / 15,
    marginVertical: SCREEN_HEIGHT / 100,
  },
  newsHeader: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Montserrat",
    marginBottom: SCREEN_HEIGHT / 90,
    color: "#fff"
  },
  newsContent: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat",
    marginTop: SCREEN_WIDTH / 15,
    lineHeight: 25,
    color: "#000"
  },
  timePosted: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "rgba(255, 255, 255, 0.8)",
  },
  newsContentContainer: {
    flex: 1,
    paddingHorizontal: SCREEN_WIDTH / 15,
    position: "absolute",
    paddingVertical: SCREEN_HEIGHT / 100,
    borderTopEndRadius: 15,
    borderTopLeftRadius:15,
    zIndex: 100,
    backgroundColor: "#fff",
    top: SCREEN_HEIGHT/2.5,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT/1,
    fontFamily: "Montserrat"
  },
  category:{
    
    height: SCREEN_HEIGHT/25,
    justifyContent: "center",
    paddingLeft: SCREEN_WIDTH/30,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: SCREEN_WIDTH/20,
    fontWeight: "600"
  },
  categoryText:{
    color: "#f0f0f0",
    fontSize: 16,
    textTransform: 'capitalize'
  }
  
});

export const FlashMessageStyle = {
  marginHorizontal: SCREEN_WIDTH / 20,
  top: SCREEN_HEIGHT / 100,
  borderRadius: MEDIUM_RAD,
  marginTop: SCREEN_HEIGHT / 70,
};
