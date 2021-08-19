import React from "react";
import { FlatList } from "react-native";
import { IChart } from "../../../interfaces";
import Chart from "../../atoms/Chart";
import SectionTitle from "../../atoms/SectionTitle";

import { Container } from "./styles";

interface IProps {
  title: string;
  charts: IChart[];
}

const SectionChart = ({ title, charts }: IProps) => {
  return (
    <Container>
      <SectionTitle title={title} />

      <FlatList
        data={charts}
        renderItem={({ item }) => <Chart {...item} />}
        horizontal
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default SectionChart;
