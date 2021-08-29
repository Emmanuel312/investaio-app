import styled from "styled-components/native";
import { colors } from "../../../utils/colors";

export const Container = styled.View`
  background: #fcfcfc;
  padding: 25px;
  height: 380px;
  width: 75%;
  border-radius: 25px;
  elevation: 1;
  box-shadow: 10px 10px 5px #ccc;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Branding = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 7px;
  margin-right: 40px;
`;

export const BrandingTitle = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #282828;
`;

export const ContentView = styled.View`
  padding: 20px 0px;
`;

export const ContentText = styled.Text`
  color: #282828;
  font-size: 24px;
  margin-bottom: 10px;
`;
