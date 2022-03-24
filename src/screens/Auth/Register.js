import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Button, Input, useToast,FormControl} from "native-base";
import styles from "./Register.style";
import { icons } from "../../styles/icons";
import validationUtils from "../../utils/validationUtils";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux-store/user.redux";
import authService from "../../services/auth";

const Welcome = ({ navigation }) => {
  const toast = useToast();
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const register = async () => {
    if (
      !(
        validationUtils.isMobileValid(value) ||
        validationUtils.isMobileValidInd(value)
      )
    )
      return toast.show({
        title: "Please Enter a valid Mobile Number",
        status: "warning",
        placement: "top",
      });
    // dispatch(userActions.setUser({ mobileNumber: value }));
    try {
      await authService.auth({ mobileNumber: value })
      navigation.navigate("OTP", {
        contoryCode: validationUtils.isMobileValid(value) ? "+971" : "+91",
        mobileNumber: value,
      });
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
          <View style={{flexDirection:"column",justifyContent: "flex-start"}}>
          <FormControl.Label>Mobile Number</FormControl.Label>
          <View style={styles.inputgrid}>
            <Input
              width="20%"
              height="56px"
              borderWidth="1"
              borderRadius="8px"
              alignSelf="center"
              variant="filled"
              value="+971"
              disabled={true}
              borderColor="rgba(209,197,197,0.31)"
              backgroundColor="#fff"
            />
            <Input
              placeholder=""
              width="78%"
              height="56px"
              borderWidth="1"
              borderRadius="8px"
              alignSelf="center"
              variant="filled"
              //   _focus={(style = styles.border)}
              onChangeText={(e) => setValue(e.replace(/\D/g, "").slice(0, 10))}
              value={value || ""}
              borderColor="rgba(209,197,197,0.31)"
              backgroundColor="#fff"
            />
          </View>
          </View>
          <Button style={styles.button} onPress={register}>
            Continue
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
