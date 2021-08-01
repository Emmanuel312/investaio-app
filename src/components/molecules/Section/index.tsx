import React from "react";

import {
  Container,
  Title,
  SectionText,
  SectionTitleView,
  Indicator,
} from "./styles";

interface IProps {
  title: string;
  sectionText: string;
}

const Section = ({ sectionText, title }: IProps) => {
  return (
    <Container>
      <SectionTitleView>
        <Indicator />
        <Title>{title}</Title>
      </SectionTitleView>
      <SectionText>{sectionText}</SectionText>
    </Container>
  );
};

export default Section;
