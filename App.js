import { StatusBar } from "expo-status-bar";
import React from "react";
import Index from "./src/index";
import { Provider } from "react-redux";
import store from "./src/redux-store";
import { NativeBaseProvider } from "native-base";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["NativeBase:"]);
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <StatusBar style="auto" />
        <Index />
      </Provider>
    </NativeBaseProvider>
  );
}
