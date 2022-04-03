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
    width: "88%",
    height: "60%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: "3%",
  },
  lowerUppaerContainer: {
    height: "35%",
    marginTop: "5%",
    width: "85%"
  },
  welcomwTextContainer: {
    marginTop: "1%",
    height: "50%",
    flexDirection: "column",
  },
  welcomeText: {
    fontSize: RFValue(30,812),
    color: "rgb(38,193,101)",
  },
  textDummyContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  dummyText: {
    fontSize: 16,
    color: "rgb(102,103,106)"
  },
  button: {
    backgroundColor: "rgb(38,193,101)",
    width: "70%",
    height: "12%",
  },

  inputgrid: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
    marginVertical: "5%",
  },
  border: {
    borderColor: "rgb(38,193,101)",
  },
  otpContainer:{
      height: "25%",
      width: "100%",
  }
});
