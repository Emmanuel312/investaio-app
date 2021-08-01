import styled from "styled-components/native";
import { colors } from "../../utils/colors";

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
