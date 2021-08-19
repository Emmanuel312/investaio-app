import React from "react";
import { IChart } from "../../../interfaces";
import { Container, TitleView, Title, InfoView, ChartContent } from "./styles";

const Chart = ({ color, name, value }: IChart) => {
  return (
    <Container>
      <TitleView>
        <Title>{name}</Title>
        <InfoView />
      </TitleView>
      <ChartContent color={color} value={value} />
    </Container>
  );
};

export default Chart;
