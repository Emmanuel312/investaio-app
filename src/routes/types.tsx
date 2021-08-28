import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Metrics: { assetName: string };
  ProfileTest: undefined;
};

// Metrics
export type MetricsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Metrics"
>;

export type MetricsScreenRouteProps = MetricsScreenProps["route"];
export type MetricsScreenNavigationProps = MetricsScreenProps["navigation"];
