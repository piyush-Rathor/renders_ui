import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button, Input, useToast, FormControl } from "native-base";
import styles from "./Register.style";
import { icons } from "../../styles/icons";
import validationUtils from "../../utils/validationUtils";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux-store/user.redux";
import authService from "../../services/auth";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
const data = [{value: '50' },{value: '52' },{value: '54' },{value: '55' },{value: '56' },{value: '58' }];
const Register = ({ navigation }) => {
  const toast = useToast();
  const [value, setValue] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const [dropDownValue, setDropDownValue] = useState(50);
  const dispatch = useDispatch();
  const register = async () => {
    if (!(validationUtils.isMobileValid(`${dropDownValue}${value}`) ||validationUtils.isMobileValidInd(value)))
      return toast.show({
        title: "Please Enter a valid Mobile Number",
        status: "warning",
        placement: "top",
      });
    // dispatch(userActions.setUser({ mobileNumber: value }));
    try {
      await authService.auth({ mobileNumber: `${dropDownValue}${value}` });
      navigation.navigate("OTP", {
        contoryCode: validationUtils.isMobileValid(`${dropDownValue}${value}`) ? "+971" : "+91",
        mobileNumber: `${dropDownValue}${value}`,
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
          <View
            style={{ flexDirection: "column", justifyContent: "flex-start" }}
          >
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
              <Dropdown
                style={[
                  stylesDropdown.dropdown,
                  isFocus && { borderColor: "blue" },
                ]}
                placeholderStyle={stylesDropdown.placeholderStyle}
                selectedTextStyle={stylesDropdown.selectedTextStyle}
                inputSearchStyle={stylesDropdown.inputSearchStyle}
                iconStyle={stylesDropdown.iconStyle}
                data={data}
                maxHeight={200}
                placeholder={!dropDownValue ? "..." : `${dropDownValue}`}
                value={dropDownValue}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                value={dropDownValue}
                onChange={(item) => {
                  setDropDownValue(item.value);
                  setIsFocus(false);
                }}
                renderLeftIcon={() => (!dropDownValue&&
                  <AntDesign
                    style={stylesDropdown.icon}
                    color={isFocus ? "blue" : "black"}
                    name="Safety"
                    size={20}
                  />
                )}
                dropdownPosition="auto"
                renderItem={(item) => (
                  <View style={stylesDropdown.dropdownView}>
                    <Text>{item.value}</Text>
                  </View>
                )}
              />
              <Input
                placeholder=""
                width="58%"
                height="56px"
                borderWidth="1"
                borderRadius="8px"
                alignSelf="center"
                variant="filled"
                //   _focus={(style = styles.border)}
                onChangeText={(e) =>
                  setValue(e.replace(/\D/g, "").slice(0, 7))
                }
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

export default Register;

const stylesDropdown = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 56,
    borderColor: "rgba(209,197,197,0.31)",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: "20%",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 13,
    color:"rgb(60,60,60)"
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  dropdownView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 28,
    // borderBottomWidth:1,
    marginVertical:"3%",
    // borderColor: "rgba(209,197,197,0.31)"
  },
});
