import styled from "styled-components/native";
import { colors } from "../../utils/colors";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  background: ${colors.base};
  flex: 1;
`;

export const Content = styled.ScrollView`
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 20px 0px 0px 25px;
`;

export const Separator = styled.View`
  background-color: #dcdcdc;
  height: ${StyleSheet.hairlineWidth}px;
  width: 90%;
  align-self: center;
`;
