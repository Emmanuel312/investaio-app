import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const Container = styled.View`
  flex: 1;
  background: ${colors.base};
  padding: 10px 0px;
`;

export const Content = styled.ScrollView`
  flex: 0.8;
`;

export const FooterView = styled.View`
  flex: 0.2;
  justify-content: center;
`;
