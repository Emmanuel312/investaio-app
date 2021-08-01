import React from "react";
import Description from "../../atoms/Description";
import Title from "../../atoms/Title";
import CardList from "../../molecules/CardList";
import { Container } from "./styles";

interface IProps {
  title: string;
  description: string;
}

const Banner = ({ title, description }: IProps) => {
  return (
    <Container>
      <Title text={title} />
      <Description text={description} />

      <CardList />
    </Container>
  );
};

export default Banner;
