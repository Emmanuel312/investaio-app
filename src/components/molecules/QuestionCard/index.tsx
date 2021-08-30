import React from "react";
import { TouchableOpacity } from "react-native";
import { Asset, AssetCore, QuestionAsset } from "../../../interfaces";
import {
  Container,
  Header,
  Branding,
  BrandingTitle,
  ContentView,
  ContentText,
} from "./styles";

const QuestionCard = ({
  assetName,
  brandingPhotoUrl,
  description,
}: QuestionAsset) => {
  return (
    <Container>
      <Header>
        <Branding source={{ uri: brandingPhotoUrl }} />
        <BrandingTitle>{assetName}</BrandingTitle>
      </Header>
      <ContentView>
        <ContentText>{description}</ContentText>
      </ContentView>
    </Container>
  );
};

export default QuestionCard;
