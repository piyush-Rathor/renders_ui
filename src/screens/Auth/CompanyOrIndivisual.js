import { View, Text, TouchableOpacity } from "react-native";
import { Checkbox, Button } from "native-base";
import styles from "./CompanyorIndiVisual.style";
import { useState } from "react";

const ComapanyOrIndivisual = ({ navigation }) => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.continueAs}>Continue As</Text>
        <Text style={styles.youMore}>We would like to know you more</Text>
        <TouchableOpacity
          style={
            value.toString() !== "INDIVIDUAL"
              ? styles.INDIVIDUALBox
              : styles.INDIVIDUALBoxActive
          }
          onPress={() => setValue("INDIVIDUAL")}
        >
          <Checkbox
            isChecked={value.toString() === "INDIVIDUAL"}
            colorScheme="rgb(219, 219, 219)"
            aria-label="INDIVIDUAL"
          />
          <Text
            style={
              value.toString() !== "INDIVIDUAL"
                ? styles.textCheckbox
                : styles.textCheckboxActive
            }
          >
            INDIVIDUAL
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            value.toString() !== "COMPANY"
              ? styles.INDIVIDUALBox
              : styles.INDIVIDUALBoxActive
          }
          onPress={() => setValue("COMPANY")}
        >
          <Checkbox
            isChecked={value.toString() === "COMPANY"}
            colorScheme="rgb(219, 219, 219)"
            aria-label="COMPANY"
          />
          <Text
            style={
              value.toString() !== "COMPANY"
                ? styles.textCheckbox
                : styles.textCheckboxActive
            }
          >
            COMPANY
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          onPress={() => {
            navigation.navigate("Emirates", { value });
          }}
        >
          Continue
        </Button>
      </View>
    </View>
  );
};
export default ComapanyOrIndivisual;
