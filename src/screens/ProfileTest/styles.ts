import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #e5e5e5;
`;

export const Header = styled.View`
  flex: 0.2;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #000;
  align-self: center;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const QuestionText = styled.Text`
  font-size: 16px;
  color: #fca311;
  font-weight: bold;
  align-self: center;
`;

export const QuestionCardListView = styled.View`
  flex: 0.7;
`;

export const SkipView = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex: 0.1;
`;

export const SkipText = styled.Text`
  font-size: 16px;
  color: #a5a5a5;
`;
