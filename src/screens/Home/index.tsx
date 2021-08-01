import React from "react";
import Banner from "../../components/organisms/Banner";
import { Asset } from "../../interfaces/Assets";

import { Container, Header, Content, Separator } from "./styles";

const asset: Asset = {
  brandingPhotoUrl:
    "http://whatsrel.com.br/wp-content/uploads/2019/06/inter.png",
  brandingTitle: "Inter",
  assetName: "BIDI11",
  value: "77.87",
  status: "2.42",
};

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Banner
          title="Ativos recomendados"
          description="Visualize as oportunidades mais alinhadas com o seu perfil."
          cardList={Array(10).fill(asset)}
        />
        <Separator />
        <Banner
          title="Educação"
          description="Aprenda sobre finanças, investimentos e educação financeira de forma simples e traduzida."
          cardList={Array(2).fill(asset)}
        />
      </Content>
    </Container>
  );
};

export default Home;
