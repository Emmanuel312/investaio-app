import React from "react";
import { StatusBar, View } from "react-native";
import { Routes } from "./routes";
import { colors } from "./utils/colors";
import { isIOS } from "./utils/functions";

const Application: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      {isIOS() && <View style={{ height: 20, backgroundColor: colors.base }} />}
      <Routes />
    </>
  );
};

export { Application };
