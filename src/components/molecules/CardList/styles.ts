import styled from "styled-components/native";
import { colors } from "../../../utils/colors";
import { lighten } from "polished";

export const Container = styled.View`
  background-color: ${lighten(0.2, colors.primary.second)};
  /* opacity: 0.4; */

  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 20px;
`;
