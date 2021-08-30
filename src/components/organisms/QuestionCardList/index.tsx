import React, { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { Asset, AssetCore, QuestionAsset } from "../../../interfaces";

import QuestionCard from "../../molecules/QuestionCard";
import { Container, RejectButton, CheckButton } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface IProps {
  assetsList: QuestionAsset[];
  skip: boolean;
  setSkip: (skip: boolean) => void;
}

const QuestionCardList = ({ assetsList, skip, setSkip }: IProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [assets, setAssets] = useState(assetsList);
  const { navigate } = useNavigation();

  useEffect(() => {
    if (skip) {
      setSafeCurrentIndex();
      setSkip(false);
    }
  }, [skip]);

  function setSafeCurrentIndex() {
    if (currentIndex < assetsList.length - 1) {
      setAssets(assets.filter((_, index) => index !== currentIndex));
      setCurrentIndex(currentIndex + 1);

      return;
    }

    navigate("Home");
  }

  const current = useMemo(() => assetsList[currentIndex], [currentIndex]);

  return (
    <Container>
      <RejectButton onPress={() => setSafeCurrentIndex()} style={{ zIndex: 1 }}>
        <Feather name="x" size={24} color="#fff" />
      </RejectButton>

      <QuestionCard {...current} />

      <CheckButton onPress={() => setSafeCurrentIndex()}>
        <Feather name="check" size={24} color="#fff" />
      </CheckButton>
    </Container>
  );
};

export default QuestionCardList;
