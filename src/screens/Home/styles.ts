import styled from "styled-components/native";
import { colors } from "../../utils/colors";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  background: ${colors.base};
  flex: 1;
`;

export const Header = styled.View`
  height: 20%;
`;

export const Content = styled.View`
  background: #fff;
  height: 80%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 20px 0 0 25px;
`;

export const Separator = styled.View`
  background-color: #dcdcdc;
  height: ${StyleSheet.hairlineWidth}px;
  width: 90%;
  align-self: center;
`;
