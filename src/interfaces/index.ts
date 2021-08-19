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
