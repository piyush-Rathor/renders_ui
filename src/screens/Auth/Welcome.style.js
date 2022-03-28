import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  mainContainer: {
    height: "85%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },
  loweContainer: {
    width: "85%",
    height: "50%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: "3%",
  },
  welcomwTextContainer: {
    height: "25%",
    flexDirection: "column",
    marginBottom:"2%",
  },
  welcomeText: {
    fontSize: RFValue(36, 812) ,
    color: "rgb(19,26,34)",
  },
  textDummyContainer: {
    height: "25%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  dummyText: {
    textAlign: "center",
    fontSize: 18,
    color: "rgb(38,193,101)",
  },
  button: {
    backgroundColor: "rgb(38,193,101)",
    width: "70%",
    height: "13%",
  },
  lowerUppaerContainer: {
    height: "55%",
    width: "80%",
    marginTop: "8%",
  },

});
