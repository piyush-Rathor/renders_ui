import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import WelComePage from "../../screens/Auth/Welcome";
import Register from "../../screens/Auth/Register";
import OTP from "../../screens/Auth/Otp";
import ComapanyOrIndivisual from "../../screens/Auth/CompanyOrIndivisual";
import Emirates from "../../screens/Auth/Emirates";
import SkipHeader from "../../components/helpers/Skip";
import Home from "../../screens/Auth/Home";
import Email from "../../screens/Auth/Email"

export const authNavigator = createStackNavigator({
  WelComePage: {
    screen: WelComePage,
    navigationOptions: ({ navigation }) => ({
      header: () => false,
      title: "",
    }),
  },
  Register: {
    screen: Register,
    navigationOptions: ({ navigation }) => ({
      header: () => false,
      title: "",
    }),
  },
  OTP: {
    screen: OTP,
    navigationOptions: ({ navigation }) => ({
      title: "",
    }),
  },
  Email:{
    screen: Email,
    navigationOptions: ({ navigation }) => ({
      title: "",
    }),
  },
  ComapanyOrIndivisual: {
    screen: ComapanyOrIndivisual,
    navigationOptions: ({ navigation }) => ({
      title: "",
      headerRight: () => <SkipHeader navigation={navigation} />,
    }),
  },
  Emirates: {
    screen: Emirates,
    navigationOptions: ({ navigation }) => ({
      title: "",
      headerRight: () => <SkipHeader navigation={navigation} />,
    }),
  },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Home",
    }),
  },
});