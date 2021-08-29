import styled from "styled-components/native";
import { lighten } from "polished";
export const Container = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

export const RejectButton = styled.TouchableOpacity`
  position: absolute;
  top: 60%;
  left: -60px;
  background-color: ${lighten(0.2, "#fca311")};
  opacity: 0.8;
  height: 120px;
  width: 120px;
  border-radius: 60px;
  align-items: flex-end;
  justify-content: center;
  padding-right: 30px;
`;

export const CheckButton = styled.TouchableOpacity`
  position: absolute;
  top: 60%;
  right: -60px;
  background-color: ${lighten(0.2, "#fca311")};
  height: 120px;
  width: 120px;
  border-radius: 60px;
  justify-content: center;
  padding-left: 30px;
`;
