import styled from "styled-components/native";
import { colors } from "../../../utils/colors";

interface StatusProps {
  isPositivelyVaried: boolean;
}

export const Container = styled.View`
  background: #fff;
  padding: 15px;
  height: 165px;
  width: 165px;
  margin-right: 10px;
  margin-bottom: 20px;
  border-radius: 25px;
  justify-content: space-between;
`;

export const Branding = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 4px;
`;

export const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BottomLeft = styled.View`
  width: 50%;
`;

export const BrandingTitle = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 18px;
`;

export const AssetName = styled.Text`
  color: #454545;
`;

export const BottomRight = styled.View`
  align-items: flex-end;
`;

export const Value = styled.Text`
  color: #000;
  font-size: 14px;
`;

export const StatusView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Status = styled.Text<StatusProps>`
  color: ${(props) =>
    props.isPositivelyVaried ? colors.variation.up : colors.variation.down};
`;
