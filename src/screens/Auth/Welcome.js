import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "native-base";
import styles from "./Welcome.style";
import { icons } from "../../styles/icons";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image source={icons.aPartMentRent} style={styles.image} />
        </View>
        <View style={styles.loweContainer}>
          <View style={styles.lowerUppaerContainer}>
            <View style={styles.welcomwTextContainer}>
              <Text style={styles.welcomeText}>Welcome</Text>
            </View>
            <View style={styles.textDummyContainer}>
              <Text style={styles.dummyText}>
                Lorem Ipsum is simply dummy text and typesetting industry.
              </Text>
            </View>
          </View>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate("Register")}
          >
            Continue
          </Button>
        </View>
      </View>
    </View>
  );
};
export default Welcome;
