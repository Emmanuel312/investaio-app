import styled from "styled-components/native";
import { getChartHeight } from "../../../services/utils";

interface ChartContentProps {
  color: string;
  value: number;
}

export const Container = styled.View`
  justify-content: flex-end;
  margin-left: 20px;
`;

export const TitleView = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const InfoView = styled.View``;

export const ChartContent = styled.View<ChartContentProps>`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  align-self: center;
  margin-top: 10px;
  background-color: ${({ color }) => color};
  height: ${({ value }) => getChartHeight(value, 300)}px;
  width: 50px;
`;
