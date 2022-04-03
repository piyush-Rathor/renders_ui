import { View, Text, TouchableOpacity } from "react-native";
import { Image, Button } from "native-base";
import styles from "./Emirates.style";
import { icons } from "../../styles/icons";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";

const Emirates = ({ navigation }) => {
  let camera;
  const [image, setImage] = useState(null);
  const [startCamera,setStartCamera] =useState(false)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  let imageObject = image ? { uri: image } : icons.emeritsPhoto;
  let imageObjectStyle = !image ? styles.emeritsPhoto : {width:"100%",height:"100%"};


  const __startCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      // start the camera
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.continueAs}>Scan Emirates ID</Text>
        <Text style={styles.youMore}>Scan you EID to verify yourself.</Text>
        <View style={styles.upperBox}>
          <View style={styles.photoView}>
            {startCamera? (
              <Camera
                style={{ flex: 1, width: "100%" }}
                ref={(r) => {
                  camera = r;
                }}
              ></Camera>
            ) : (
              <TouchableOpacity style={styles.photoViewToubkle} onPress={__startCamera} >
                <Image
                  style={styles.emeritsPhoto}
                  source={icons.emeritsPhoto}
                  alt="icon"
                />
              </TouchableOpacity>
             )}
          </View>
        </View>
        <View style={styles.upperBox}>
          <TouchableOpacity onPress={pickImage} style={styles.photoView}>
            <Image
              style={imageObjectStyle}
              source={imageObject}
              alt="icon"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("EmiratesForm")}
        >
          Continue
        </Button>
      </View>
    </View>
  );
};
export default Emirates;
