import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Button, useToast } from "native-base";
import { icons } from "../../styles/icons";
import styles from "./Otp.style";
import OTPTextInput from "react-native-otp-textinput";
import { useSelector } from "react-redux";
import authService from "../../services/auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const Otp = ({ navigation }) => {
  const toast = useToast();
  const user = useSelector((store) => store.user);
  const [otp, setOtp] = useState("");
  const mobileNumber = navigation.getParam("mobileNumber");
  const contoryCode = navigation.getParam("contoryCode");
  const confirmAuth = async () => {
    try {
      const { data } = await authService.confirmAuth({ otp, mobileNumber });
      // await AsyncStorage.setItem("token", JSON.stringify(data?.data?.token));
      if (data.data?.userAllReadyRegistered) {
        navigation.navigate("Home");
      } else {
        navigation.navigate("Email");
      }
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
              <Text style={styles.welcomeText}>OTP Verification</Text>
            </View>
            <View style={styles.textDummyContainer}>
              <Text style={styles.dummyText}>
                We sent a six digit code to {contoryCode} - {mobileNumber} Enter
                the code below to confirm
              </Text>
            </View>
          </View>
          <View style={styles.otpContainer}>
            {/* <OTPInput
              tintColor="rgb(38,193,101)"
              offTintColor="rgba(209,197,197, 0.31)"
              otpLength={6}
              value={otp || ""}
              onChange={(e) => setOtp(e)}
              containerStyle={{ margin: "1%" }}
              autoFocusOnLoad={true}
              cellStyle={{
                borderRadius: 8,
                height: 56,
                color: "rgb(38,193,101)",
              }}
            /> */}
            <OTPTextInput
              inputCount={6}
              handleTextChange={(e) => {
                setOtp(e.replace(/\D/g, ""));
              }}
              textInputStyle="rgb(38,193,101)"
              style={{
                width: "12%",
                backgroundColor: "#fff",
                color: "rgb(38,193,101)",
                borderRadius: 8,
                borderWidth: 1,
                height: 56,
                textAlign: "center",
                borderColor: "rgba(209,197,197, 0.31)",
              }}
            />
          </View>
          <Button style={styles.button} onPress={confirmAuth}>
            Verify & Proceed
          </Button>
        </View>
      </View>
    </View>
  );
};
export default Otp;
