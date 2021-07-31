import React from "react";
import Banner from "../../components/organisms/Banner";

import { Container, Header, Content } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Banner />
        <Banner />
      </Content>
    </Container>
  );
};

export default Home;
