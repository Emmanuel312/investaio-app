import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AVATAR_AMOUNT, GENERIC_ASSET_IMAGE } from "../../../utils/constants";
import metricsPerson1 from "../../../assets/metrics-person-1.png";
import metricsPerson2 from "../../../assets/metrics-person-2.png";
import metricsPerson3 from "../../../assets/metrics-person-3.png";
import metricsPerson4 from "../../../assets/metrics-person-4.png";
import metricsPerson5 from "../../../assets/metrics-person-5.png";

const metricsPerson = [
  metricsPerson1,
  metricsPerson2,
  metricsPerson3,
  metricsPerson4,
  metricsPerson5,
];

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
        <BrandingTitle adjustsFontSizeToFit>{brandingTitle}</BrandingTitle>
        <AssetName>{assetName}</AssetName>
      </BrandingView>
      <AvatarView>
        {metricsPerson.map((metricPerson, index) => (
          <Avatar key={index} source={metricPerson} />
        ))}

        <AvatarAmount>{AVATAR_AMOUNT}</AvatarAmount>
      </AvatarView>
      <Branding
        source={{
          uri: brandingPhotoUrl || GENERIC_ASSET_IMAGE,
        }}
      />
    </Container>
  );
};

export default MetricsHeader;
