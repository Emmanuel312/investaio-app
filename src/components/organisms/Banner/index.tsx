import React from "react";
import Description from "../../atoms/Description";
import Title from "../../atoms/Title";
import CardList from "../../molecules/CardList";
import { Container } from "./styles";

const Banner: React.FC = () => {
  return (
    <Container>
      <Title text="Title" />
      <Description text="Description" />

      <CardList />
    </Container>
  );
};

export default Banner;
