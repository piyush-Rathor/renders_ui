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
  INDIVIDUALBox: {
    height: "13%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "2%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(209,197,197, 0.31)",
    padding: "4%",
  },
  INDIVIDUALBoxActive: {
    height: "13%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "rgb(39,191,99)",
    marginTop: "2%",
    borderRadius: 8,
    padding: "4%",
  },
  checkbox: {
    alignSelf: "center",
  },
  textCheckbox: {
    marginLeft: "5%",
    color: "rgb(15,15,16))",
    fontSize: 16,
  },
  textCheckboxActive: {
    marginLeft: "5%",
    color: "#fff",
    fontSize: 16,
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
});
