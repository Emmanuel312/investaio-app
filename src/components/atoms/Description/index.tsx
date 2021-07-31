import React from "react";
import { Container, DescriptionText } from "./styles";

interface IProps {
  text: string;
}

const Description = ({ text }: IProps) => {
  return (
    <Container>
      <DescriptionText>{text}</DescriptionText>
    </Container>
  );
};

export default Description;
