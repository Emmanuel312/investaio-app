import React from "react";
import { Container, Indicator, Title } from "./styles";

interface IProps {
  title: string;
}

const SectionTitle = ({ title }: IProps) => {
  return (
    <Container>
      <Indicator />
      <Title>{title}</Title>
    </Container>
  );
};

export default SectionTitle;
