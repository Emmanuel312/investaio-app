import React from "react";
import { Container, TitleText } from "./styles";

interface IProps {
  text: string;
}

const Title = ({ text }: IProps) => {
  return (
    <Container>
      <TitleText>{text}</TitleText>
    </Container>
  );
};

export default Title;
