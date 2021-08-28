import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AvatarView = styled.View`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image``;

export const Info = styled.View`
  padding: 10px 20px;
`;

export const WelcomeText = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export const Username = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;
