import React from "react";
import { FlatList } from "react-native";
import Card from "../../atoms/Card";
import { Container } from "./styles";

const data = [{ ok: 1 }, { ok: 2 }];

const CardList = () => {
  return (
    <Container>
      <FlatList data={data} horizontal renderItem={({ item }) => <Card />} />
    </Container>
  );
};

export default CardList;
