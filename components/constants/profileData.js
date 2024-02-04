import { Image } from "react-native";
// import changeName from "../../assets/images/chnagename.png"
import { Ionicons } from "@expo/vector-icons";
export default [
  {
    label: "Change your name",
    link: "/",
    Icon: <Ionicons name="create-outline" size={25} color="darkblue" />,
  },
  {
    label: "Change your password",
    link: "/",
    Icon: <Ionicons name="lock-closed-outline" size={25} color="darkblue" />,
  },
  {
    label: "Email",
    link: "/",
    Icon: <Ionicons name="mail-outline" size={25} color="darkblue" />,
  },
  {
    label: "Logout",
    link: "/",
    Icon: <Ionicons name="log-out-outline" size={25} color="rgba(255,0,0,0.7)" />,
  },
];
