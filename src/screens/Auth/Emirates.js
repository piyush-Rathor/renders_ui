import { View, Text, TouchableOpacity } from "react-native";
import { Image, Button } from "native-base";
import styles from "./Emirates.style";
import { icons } from "../../styles/icons";

const Emirates = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.continueAs}>Scan Emirates ID</Text>
        <Text style={styles.youMore}>Scan you EID to verify yourself.</Text>
        <View style={styles.upperBox}>
          <View style={styles.photoView}>
            <Image
              style={styles.emeritsPhoto}
              source={icons.emeritsPhoto}
              alt="icon"
            />
          </View>
        </View>
        <View style={styles.upperBox}>
          <View style={styles.photoView}>
            <Image
              style={styles.emeritsPhoto}
              source={icons.emeritsPhoto}
              alt="icon"
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          Continue
        </Button>
      </View>
    </View>
  );
};
export default Emirates;
