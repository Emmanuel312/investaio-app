import React from "react";
import { Image } from "react-native";
import {
  Container,
  Branding,
  Bottom,
  BottomLeft,
  BrandingTitle,
  AssetsName,
  BottomRight,
  Value,
  Status,
} from "./styles";

const Card = () => {
  return (
    <Container>
      <Branding
        source={{
          uri: "http://whatsrel.com.br/wp-content/uploads/2019/06/inter.png",
        }}
      />

      <Bottom>
        <BottomLeft>
          <BrandingTitle>Inter</BrandingTitle>
          <AssetsName>BIDI11</AssetsName>
        </BottomLeft>

        <BottomRight>
          <Value>R$ 77,87</Value>
          <Status>2,42</Status>
        </BottomRight>
      </Bottom>
    </Container>
  );
};

export default Card;
