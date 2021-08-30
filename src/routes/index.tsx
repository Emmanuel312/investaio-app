import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Metrics from "../screens/Metrics";
import { RootStackParamList } from "./types";
import ProfileTest from "../screens/ProfileTest";

const Stack = createStackNavigator<RootStackParamList>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="ProfileTest" component={ProfileTest} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Metrics" component={Metrics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
