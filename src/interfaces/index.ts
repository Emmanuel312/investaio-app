import { ParamListBase, RouteProp } from "@react-navigation/native";

export interface AssetCore {
  assetName: string;
  brandingTitle: string;
  brandingPhotoUrl: string;
}

export interface Asset extends AssetCore {
  value: string;
  status: string;
  isPositivelyVaried: boolean;
}

export interface IMetricsInfo extends AssetCore {
  description: string;
  chartValues: number[];
}

export interface IChart {
  name: string;
  value: number;
  color: string;
}

export interface QuestionAsset extends AssetCore {
  description: string;
}

export interface AssetParams extends RouteProp<ParamListBase, string> {
  assetName: string;
}
