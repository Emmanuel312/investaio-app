import React from "react";
import { FlatList } from "react-native";
import { Asset } from "../../../interfaces/Assets";
import Card from "../../atoms/Card";
import { Container } from "./styles";

interface IProps {
  assetsList: Asset[];
}

const CardList = ({ assetsList }: IProps) => {
  return (
    <Container>
      <FlatList
        data={assetsList}
        renderItem={({ item }) => <Card {...item} />}
        horizontal
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default CardList;
