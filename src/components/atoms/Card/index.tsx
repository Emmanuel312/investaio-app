import React from "react";
import { Asset } from "../../../interfaces/Assets";
import {
  Container,
  Branding,
  Bottom,
  BottomLeft,
  BrandingTitle,
  AssetName,
  BottomRight,
  Value,
  Status,
} from "./styles";

const Card = ({
  brandingPhotoUrl,
  brandingTitle,
  assetName,
  value,
  status,
}: Asset) => {
  return (
    <Container>
      <Branding
        source={{
          uri: brandingPhotoUrl,
        }}
      />

      <Bottom>
        <BottomLeft>
          <BrandingTitle>{brandingTitle}</BrandingTitle>
          <AssetName>{assetName}</AssetName>
        </BottomLeft>

        <BottomRight>
          <Value>{`R$ ${value}`}</Value>
          <Status>{status}</Status>
        </BottomRight>
      </Bottom>
    </Container>
  );
};

export default Card;
