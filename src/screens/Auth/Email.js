import React, { useState } from "react";
import { View, Text, Image} from "react-native";
import { Button, Input, useToast, FormControl } from "native-base";
import styles from "./Email.Register";
import { icons } from "../../styles/icons";
import validationUtils from "../../utils/validationUtils";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux-store/user.redux";
import authService from "../../services/auth";

const Email = ({ navigation }) => {
  const toast = useToast();
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const register = async () => {
    if (!validationUtils.isEmailValid(value))
      return toast.show({
        title: "Please Enter a valid Email Address",
        status: "warning",
        placement: "top",
      });
    try {
      navigation.navigate("ComapanyOrIndivisual");
    } catch (error) {
      return toast.show({
        title: error.data.message,
        status: "warning",
        placement: "top",
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image source={icons.otpIcon} style={styles.image} />
        </View>
        <View style={styles.loweContainer}>
          <View style={styles.lowerUppaerContainer}>
            <View style={styles.welcomwTextContainer}>
              <Text style={styles.welcomeText}> Hi, There 👋🏻</Text>
            </View>
            <View style={styles.textDummyContainer}>
              <Text style={styles.dummyText}>
                We will send you an One Time Password on this mobile number
              </Text>
            </View>
          </View>
          <View style={styles.inputgrid}>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder=""
              width="100%"
              height="56px"
              borderWidth="1"
              borderRadius="8px"
              alignSelf="center"
              variant="filled"
              //   _focus={(style = styles.border)}
              onChangeText={(e) => setValue(e)}
              value={value || ""}
              borderColor="rgba(209,197,197,0.31)"
              backgroundColor="#fff"
            />
          </View>
          <Button style={styles.button} onPress={register}>
            Continue
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Email;
