import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Skip = ({ navigation,url}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(url)}>
      <View>
        <Text style={{ marginRight: 25, color: "rgb(38,193,101)" }}>Skip</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Skip;