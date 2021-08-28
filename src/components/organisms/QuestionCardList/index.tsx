import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { Asset, AssetCore } from "../../../interfaces";
import Card from "../../molecules/Card";
import QuestionCard from "../../molecules/QuestionCard";
import { Container } from "./styles";

interface IProps {
  assetsList: AssetCore[];
}

const QuestionCardList = ({ assetsList }: IProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function setSafeCurrentIndex(index: number) {
    if (index < 0) setCurrentIndex(0);
    else if (index >= assetsList.length) setCurrentIndex(assetsList.length - 1);
    else setCurrentIndex(index);
  }

  const current = useMemo(() => assetsList[currentIndex], [currentIndex]);

  console.log(currentIndex);

  return (
    <Container>
      <TouchableOpacity
        onPress={() => setSafeCurrentIndex(currentIndex - 1)}
        style={{ zIndex: 1 }}
      >
        <Text>Anterior</Text>
      </TouchableOpacity>

      <QuestionCard {...current} />

      <TouchableOpacity onPress={() => setSafeCurrentIndex(currentIndex + 1)}>
        <Text>Próximo</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default QuestionCardList;
