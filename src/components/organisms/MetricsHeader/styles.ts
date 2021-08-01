import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const GoBack = styled.TouchableOpacity``;

export const Back = styled.View``;

export const BrandingView = styled.View``;

export const BrandingTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const AssetName = styled.Text`
  color: #e4e4e4;
  font-size: 12px;
`;

export const AvatarView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  margin-right: -10px;
`;

export const AvatarAmount = styled.Text`
  color: #e4e4e4;
  font-size: 18px;
  margin-left: 20px;
`;

export const Branding = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 5px;
`;
