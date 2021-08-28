import React from "react";
import { TouchableOpacity } from "react-native";
import { Asset, AssetCore } from "../../../interfaces";
import {
  Container,
  Header,
  Branding,
  BrandingTitle,
  ContentView,
  ContentText,
} from "./styles";

const QuestionCard = ({ assetName, brandingPhotoUrl }: AssetCore) => {
  return (
    <Container>
      <Header>
        <Branding source={{ uri: brandingPhotoUrl }} />
        <BrandingTitle>{assetName}</BrandingTitle>
      </Header>
      <ContentView>
        <ContentText>
          A volatilidade do ativo é alta, e isso indica o nível de risco dela.
        </ContentText>

        <ContentText>
          A ação está forte no momento, isto é, com bons retornos, e tem um
          histórico também bom.
        </ContentText>
      </ContentView>
    </Container>
  );
};

export default QuestionCard;
