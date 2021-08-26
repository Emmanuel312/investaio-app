import React from "react";
import Banner from "../../components/organisms/Banner";
import Header from "../../components/organisms/Header";
import { Asset } from "../../interfaces";
import useFetch from "use-http";

import { Container, Content } from "./styles";
import { BASE_URL } from "../../utils/constants";

const assets: Asset[] = [
  {
    brandingPhotoUrl: "https://logospng.org/wp-content/uploads/banco-inter.png",
    brandingTitle: "INTER",
    assetName: "BIDI11",
    value: "115.10",
    status: "1.26",
    isPositivelyVaried: true,
  },
  {
    brandingPhotoUrl:
      "https://logospng.org/download/vale/logo-vale-escudo-1536.png",
    brandingTitle: "VALE",
    assetName: "VALE3",
    value: "77,87",
    status: "2,42",
    isPositivelyVaried: false,
  },
];

const Home = () => {
  const {
    loading,
    error,
    data: assets2 = [],
  } = useFetch<Asset[]>(`${BASE_URL}/actives/all`);

  return (
    <Container>
      {/* {!!error && !loading && ( */}
      {/* <> */}
      <Header />

      <Content showsVerticalScrollIndicator={false}>
        <Banner
          title="Ativos recomendados"
          description="Visualize as oportunidades mais alinhadas com o seu perfil."
          cardList={[...assets, ...assets]}
        />
      </Content>
      {/* </> */}
      {/* )} */}
    </Container>
  );
};

export default Home;
