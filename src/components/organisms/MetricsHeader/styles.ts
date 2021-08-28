import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const GoBack = styled.TouchableOpacity``;

export const BrandingView = styled.View`
  justify-content: center;
  align-items: center;
  width: 30%;
`;

export const BrandingTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const AssetName = styled.Text`
  color: #e4e4e4;
  font-size: 12px;
`;

export const AvatarView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

export const Avatar = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-right: -15px;
`;

export const AvatarAmount = styled.Text`
  color: #e4e4e4;
  font-size: 18px;
  margin-left: 20px;
`;

export const Branding = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 4px;
`;
