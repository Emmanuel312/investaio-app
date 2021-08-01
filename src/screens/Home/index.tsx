import React from "react";
import Banner from "../../components/organisms/Banner";

import { Container, Header, Content } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Banner
          title="Ativos recomendados"
          description="Visualize as oportunidades mais alinhadas com o seu perfil."
        />
        <Banner
          title="Educação"
          description="Aprenda sobre finanças, investimentos e educação financeira de forma simples e traduzida."
        />
      </Content>
    </Container>
  );
};

export default Home;
