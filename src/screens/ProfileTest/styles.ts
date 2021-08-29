import styled from "styled-components/native";
import { colors } from "../../utils/colors";

export const Container = styled.View`
  background: #e5e5e5;
  flex: 1;
`;

export const QuestionCardListView = styled.View`
  flex: 0.8;
  justify-content: flex-end;
`;

export const SkipView = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex: 0.2;
`;

export const SkipText = styled.Text`
  font-size: 16px;
  color: #a5a5a5;
`;
