import { Dimensions, Platform } from "react-native";
import { TestIds } from "react-native-google-mobile-ads";

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
  LOGOUT_API_URL: "",

  SIGNUP_API_URL:
    // "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=",
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=",

  GET_LOGGED_IN_USER:
    "https://identitytoolkit.googleapis.com/accounts:signUp?key=",
};
export const ADMOB_CONFIG = {
  adUnitAd: __DEV__ ? TestIds.BANNER : "ca-app-pub-2672084441882438/7622608608",
  insterStitiaAd: __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-2672084441882438/6664750155"
};


export const MOCK_NEWS = [{
  "category": "A-List",
  "date": "Wed, 24 Jan 2024 18:15:02 +0000",
  "image": "https://i0.wp.com/tooxclusive.com/wp-content/uploads/2022/08/In-Transit-deluxe-cover.jpeg?resize=500%2C500&quality=60&ssl=1",
  "read": "https://tooxclusive.com/terri-danger-ft-bnxn-fka-buju-song/",
  "site": "tooxclusive",
  "title": "Terri Danger ft. BNXN fka Buju (Song)"
  },
  {
  "category": "Entertainment News",
  "date": "Wed, 24 Jan 2024 17:08:40 +0000",
  "image": "https://www.gistreel.com/wp-content/uploads/2024/01/unusualphyna-20240124-0002.jpg",
  "read": "https://www.gistreel.com/hair-vendor-apologizes-hours-after-phyna-filed-a-petition-against-her-over-alleged-rented-wig/",
  "site": "gistreal",
  "title": "Hair vendor apologizes hours after Phyna filed a petition against her over alleged rented wig"
  },
  {
  "category": "Sport",
  "date": "Wed, 24 Jan 2024 14:51:20 +0000",
  "image": null,
  "read": "https://gossipinfo.com.ng/the-compensation-received-by-jose-mourinho-from-various-clubs/",
  "site": "gossipinfo",
  "title": "The compensation received by Jose Mourinho from various clubs."
  },
  {
  "category": "Viral Gist",
  "date": "Wed, 24 Jan 2024 17:08:10 +0000",
  "image": "https://www.gistreel.com/wp-content/uploads/2024/01/IMG_4456-685x1024.webp",
  "read": "https://www.gistreel.com/young-lady-celebrates-as-she-buys-new-building-and-benz-from-her-fashion-design-business/",
  "site": "gistreal",
  "title": "Young lady celebrates as she buys new building and Benz from her fashion design business"
  },
  {
  "category": "Nigeria News",
  "date": "Wed, 24 Jan 2024 18:09:25 +0000",
  "image": "https://www.naijanews.com/wp-content/uploads/2021/09/Pantami-pro.jpg",
  "read": "https://www.naijanews.com/2024/01/24/pantami-annoyed-some-persons-in-buharis-cabinet-fashola/",
  "site": "NaijaNews",
  "title": "Pantami Annoyed Some Persons In Buhari’s Cabinet – Fashola"
  },
  {
  "category": "A-List",
  "date": "Wed, 24 Jan 2024 17:58:29 +0000",
  "image": "https://i0.wp.com/tooxclusive.com/wp-content/uploads/2021/04/Bling-artwork.jpeg?resize=700%2C700&quality=60&ssl=1",
  "read": "https://tooxclusive.com/blaqbonez-bling-ft-amaarae-x-buju-mp3-song/",
  "site": "tooxclusive",
  "title": "Blaqbonez – “Bling” ft. Amaarae x Buju | Mp3 (Song)"
  },
  ]
