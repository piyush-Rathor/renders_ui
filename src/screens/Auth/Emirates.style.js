import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#fff",
  },
  mainContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "80%",
    width: "100%",
    padding: "2%",
  },
  continueAs: {
    fontSize: 32,
    color: "rgb(39,191,99)",
    marginBottom: "3%",
  },
  youMore: {
    fontSize: 16,
    color: "rgb(15,15,16)",
    marginVertical: "2%",
  },
  buttonContainer: {
    width: "100%",
    height: "20%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "rgb(38,193,101)",
    width: "70%",
    height: "30%",
  },
  upperBox: {
    height: "44%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  photoView: {
    height: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    borderWidth: 1,
    borderColor: "rgb(185,178,178)",
    borderRadius: 8,
  },
  photoViewToubkle: {
    height: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    borderWidth: 0,
    borderColor: "rgb(185,178,178)",
    borderRadius: 8,
  },
  emeritsPhoto:{
    width: "30%",
    height: "30%",
  },
  image:{
    height: "100%",
    width: "100%",
  }
});
