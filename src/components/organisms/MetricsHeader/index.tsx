import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  BrandingView,
  BrandingTitle,
  AssetName,
  AvatarView,
  Avatar,
  AvatarAmount,
  Branding,
  GoBack,
} from "./styles";
import { AVATAR_AMOUNT } from "../../../utils/constants";

interface Iprops {
  brandingTitle: string;
  assetName: string;
  brandingPhotoUrl: string;
}

const MetricsHeader = ({
  assetName,
  brandingTitle,
  brandingPhotoUrl,
}: Iprops) => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <GoBack onPress={() => goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </GoBack>
      <BrandingView>
        <BrandingTitle>{brandingTitle}</BrandingTitle>
        <AssetName>{assetName}</AssetName>
      </BrandingView>
      <AvatarView>
        <Avatar
          source={{
            uri: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
          }}
        />
        <Avatar
          source={{
            uri: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
          }}
        />
        <Avatar
          source={{
            uri: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
          }}
        />
        <AvatarAmount>{AVATAR_AMOUNT}</AvatarAmount>
      </AvatarView>
      <Branding
        source={{
          uri: brandingPhotoUrl,
        }}
      />
    </Container>
  );
};

export default MetricsHeader;
