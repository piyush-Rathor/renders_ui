import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  mainContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingVertical: "4%",
    paddingHorizontal: "5%",
  },
  topContainer: {
    height: "10%",
    backgroundColor: "#fff",
  },
  confirmTextContaner: {
    height: "65%",
  },
  confirmText: {
    color: "rgb(39,191,99)",
    fontSize: RFValue(34, 927),
  },
  descTextContainer: {
    height: "35%",
  },
  descText: {
    color: "rgb(15,15,16)",
    fontSize: RFValue(16, 927),
  },
  lowerContainer: {
    height: "90%",
    paddingVertical: "5%",
    //   backgroundColor: "#000"
  },
});
