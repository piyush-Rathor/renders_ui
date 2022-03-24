import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authNavigator } from "./routes/navigator/stack";
import { MenuProvider } from "react-native-popup-menu";
import { createAppContainer } from "react-navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Index = () => {
  const user = useSelector((state) => state.user);
  const [isAuth, setAuth] = useState(null);

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    try {
      const me = await AsyncStorage.getItem("token");
      if (!!me) {
        setAuth(!!me);
        return;
      }
      AsyncStorage.removeItem("token");
      return;
    } catch (err) {
      console.log("err-->", err);
      return;
    }
  };
  const App = createAppContainer(authNavigator);
  return (
    <MenuProvider>
      <App />
    </MenuProvider>
  );
};
export default Index;
