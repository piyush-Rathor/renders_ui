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
    height: "32%",
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
    height: "60%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: "3%",
  },
  welcomwTextContainer: {
    marginTop: "1%",
    height: "30%",
    flexDirection: "column",
  },
  welcomeText: {
    fontSize: RFValue(31, 812),
    color: "rgb(38,193,101)",
  },
  textDummyContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  dummyText: {
    fontSize: RFValue(16, 812),
  },
  button: {
    backgroundColor: "rgb(38,193,101)",
    width: "70%",
    height: "12%",
    marginTop: "8%",
  },
  lowerUppaerContainer: {
      width: "100%",
    height: "45%",
    marginTop: "5%",
    flexDirection: "column",
    alignItems: "flex-start",
},
inputgrid: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "20%",
    marginBottom: "8%",
  },
  border: {
    borderColor: "rgb(38,193,101)",
  },
});
