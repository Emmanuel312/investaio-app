import React from "react";
import { FlatList } from "react-native";
import { Asset } from "../../../interfaces";
import Card from "../../molecules/Card";
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
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
      />
    </Container>
  );
};

export default CardList;
