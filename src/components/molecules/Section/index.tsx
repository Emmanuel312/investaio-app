import React from "react";
import SectionTitle from "../../atoms/SectionTitle";

import { Container, SectionText } from "./styles";

interface IProps {
  title: string;
  sectionText: string;
}

const Section = ({ sectionText, title }: IProps) => {
  return (
    <Container>
      <SectionTitle title={title} />
      <SectionText>{sectionText}</SectionText>
    </Container>
  );
};

export default Section;
