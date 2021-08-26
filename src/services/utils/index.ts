import { IChart } from "../../interfaces";
import { chartColors } from "../../utils/colors";
import { CHARTS_NAME } from "../../utils/constants";

export const wait = async (delay: number) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });

export const toChart = (chartValues: number[]): IChart[] =>
  chartValues.map((value, index) => ({
    name: CHARTS_NAME[index],
    color: chartColors[index],
    value,
  }));

export const getChartHeight = (value: number, fullHeight: number) =>
  fullHeight * (value * 0.1);
