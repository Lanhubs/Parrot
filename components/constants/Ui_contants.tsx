import { Dimensions, Platform } from "react-native";
// import { TestIds } from "react-native-google-mobile-ads";

export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;
// export const Os = Platform.Os
export const TAB_WIDTH = SCREEN_WIDTH - SCREEN_WIDTH / 20;
export const MEDIUM_RAD = SCREEN_WIDTH / 40;
export const firebase = {
  apiKey: "AIzaSyBrsR5hHYoOtllwis6cpvbQDp7tLhRmqLY",
  API_URL:
    "https://identitytoolkit.googleapis.com/accounts:signInWithCustomToken?key=",
  LOGIN_API_URL:
    "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=",

  SIGNUP_API_URL:
    // "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=",
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=",

  GET_LOGGED_IN_USER:
    "https://identitytoolkit.googleapis.com/accounts:signUp?key=",
};
// export const ADMOB_CONFIG = {
//   adUnitAd: __DEV__ ? TestIds.BANNER : "ca-app-pub-2672084441882438/7622608608",
//   insterStitiaAd: __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-2672084441882438/6664750155"
// };


