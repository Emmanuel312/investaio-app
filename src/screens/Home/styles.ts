import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const Container = styled.View`
  background: ${colors.base};
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 20px 0px 0px 25px;
`;
