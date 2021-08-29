import React, { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { Asset, AssetCore } from "../../../interfaces";
import Card from "../../molecules/Card";
import QuestionCard from "../../molecules/QuestionCard";
import { Container, RejectButton, CheckButton } from "./styles";
import { Feather } from "@expo/vector-icons";

interface IProps {
  assetsList: AssetCore[];
  skip: boolean;
  setSkip: (skip: boolean) => void;
}

const QuestionCardList = ({ assetsList, skip, setSkip }: IProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [assets, setAssets] = useState(assetsList);

  useEffect(() => {
    if (skip) {
      setSafeCurrentIndex(currentIndex - 1);
      setSkip(false);
    }
  }, [skip]);

  function setSafeCurrentIndex(index: number) {
    if (index < 0) setCurrentIndex(0);
    else if (index >= assetsList.length) setCurrentIndex(assetsList.length - 1);
    else setCurrentIndex(index);
  }

  const current = useMemo(() => assetsList[currentIndex], [currentIndex]);

  return (
    <Container>
      <RejectButton
        onPress={() => setSafeCurrentIndex(currentIndex - 1)}
        style={{ zIndex: 1 }}
      >
        <Feather name="x" size={24} color="#fff" />
      </RejectButton>

      <QuestionCard {...current} />

      <CheckButton onPress={() => setSafeCurrentIndex(currentIndex + 1)}>
        <Feather name="check" size={24} color="#fff" />
      </CheckButton>
    </Container>
  );
};

export default QuestionCardList;
