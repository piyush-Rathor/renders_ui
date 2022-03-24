import { Asset } from "expo-asset";

export const icons = {
  aPartMentRent: require("../../assets/aPartMentRent.png"),
  otpIcon: require("../../assets/otp.png"),
  emeritsPhoto:require("../../assets/emeritsPhoto.png")
};

// image preloading
var icns = [];
Object.keys(icons).forEach((key) => icns.push(icons[key]));
export const iconAssets = icns.map((icn) =>
  Asset.fromModule(icn).downloadAsync()
);
