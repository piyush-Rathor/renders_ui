import { View, Text ,ScrollView} from "react-native";
import React from "react";
import { Input, FormControl, Select, CheckIcon, Button } from "native-base";
import styles from "./EmiratesForm.style";

const EmiratesForm = ({ navigation }) => {
  let [service, setService] = React.useState("Male");
  let [contory, setContory] = React.useState("The United Arab Emirates (UAE)");
  const [eida, setEida] = React.useState("101010ABC");

  return (
    <ScrollView style={{backgroundColor:"#fff"}}>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <View style={styles.confirmTextContaner}>
            <Text style={styles.confirmText}>Confirm Details</Text>
          </View>
          <View style={styles.descTextContainer}>
            <Text style={styles.descText}>
              Please check once before submitting
            </Text>
          </View>
        </View>
        <View style={styles.lowerContainer}>
          <FormControl.Label >
            <Text style={{ marginTop: "1%",color:"rgb(102,103,106)"}}>Full Name{" "}</Text>
          </FormControl.Label>
          <Input
            variant="outline"
            placeholder="Alex Thomas"
            value="Alex Thomas"
            height="42"
          />
          <FormControl.Label style={{ marginTop: "4%" }}>
          <Text style={{ marginTop: "1%",color:"rgb(102,103,106)"}}> Date of Birth{" "}</Text>
           
          </FormControl.Label>
          <Input
            variant="outline"
            placeholder="08/01/1999"
            height="42"
            type="date"
            value="08/01/1999"
          />
          <FormControl.Label style={{ marginTop: "4%" }}>
          <Text style={{ marginTop: "1%",color:"rgb(102,103,106)"}}>Gender*{" "}</Text>
            
          </FormControl.Label>
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choose Gender"
            placeholder="Choose Service"
            height="42"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Male" value="Male" />
            <Select.Item label="Female" value="Female" />
          </Select>
          <FormControl.Label style={{ marginTop: "4%" }}>
          <Text style={{ marginTop: "1%",color:"rgb(102,103,106)"}}> Nationality*{" "}</Text>
           
          </FormControl.Label>
          <Select
            selectedValue={contory}
            minWidth="200"
            accessibilityLabel="Choose Country"
            placeholder="Choose Country"
            height="42"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setContory(itemValue)}
          >
            <Select.Item
              label="The United Arab Emirates (UAE)"
              value="The United Arab Emirates (UAE)"
            />
            <Select.Item label="India" value="India" />
          </Select>
          <FormControl.Label style={{ marginTop: "4%" }}>
            EIDA*{" "}
          </FormControl.Label>
          <Select
          selectedValue={eida}
            minWidth="200"
            accessibilityLabel="Choose EIDA"
            placeholder="Choose EIDA"
            height="42"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setEida(itemValue)}
          >
            <Select.Item label="101010ABC" value="101010ABC" />
            <Select.Item label="101010ABD" value="101010ABD" />
          </Select>
          <FormControl.Label style={{ marginTop: "4%" }}>
          <Text style={{ marginTop: "1%",color:"rgb(102,103,106)"}}>EID Expirty Date{" "}</Text>
            
          </FormControl.Label>
          <Input
            variant="outline"
            placeholder="08/01/1999"
            height="42"
            type="date"
            value="08/01/1999"
          />
          <Button
            style={{
              marginTop: "8%",
              height: "8%",
              backgroundColor: "rgb(39,191,99)",
            }}
            onPress={() => navigation.navigate("Home")}
          >
            Submit
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
export default EmiratesForm;
