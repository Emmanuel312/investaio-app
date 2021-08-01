import React from "react";
import { Asset } from "../../../interfaces";
import Description from "../../atoms/Description";
import Title from "../../atoms/Title";
import CardList from "../../molecules/CardList";
import { Container } from "./styles";

interface IProps {
  title: string;
  description: string;
  cardList: Asset[];
}

const Banner = ({ title, description, cardList }: IProps) => {
  return (
    <Container>
      <Title text={title} />
      <Description text={description} />

      <CardList assetsList={cardList} />
    </Container>
  );
};

export default Banner;
