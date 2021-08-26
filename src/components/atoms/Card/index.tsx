import React from "react";
import { TouchableOpacity } from "react-native";
import { Asset } from "../../../interfaces";
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
  StatusView,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../../utils/colors";

const Card = ({
  brandingPhotoUrl,
  brandingTitle,
  assetName,
  value,
  status,
  isPositivelyVaried,
}: Asset) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate("Metrics", { assetName })}>
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
            <StatusView>
              {isPositivelyVaried ? (
                <AntDesign
                  name="caretup"
                  size={12}
                  color={colors.variation.up}
                />
              ) : (
                <AntDesign
                  name="caretdown"
                  size={12}
                  color={colors.variation.down}
                />
              )}
              <Status isPositivelyVaried={isPositivelyVaried}>{status}</Status>
            </StatusView>
          </BottomRight>
        </Bottom>
      </Container>
    </TouchableOpacity>
  );
};

export default Card;
