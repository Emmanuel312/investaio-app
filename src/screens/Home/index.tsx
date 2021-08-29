import React from "react";
import Banner from "../../components/organisms/Banner";
import Header from "../../components/organisms/Header";
import { Asset } from "../../interfaces";
import useFetch from "use-http";
import { useFocusEffect } from "@react-navigation/native";

import { Container, Content } from "./styles";
import { BASE_URL } from "../../utils/constants";
import { useState } from "react";
import { useEffect } from "react";

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
  const [assets, setAssets] = useState<Asset[]>([]);
  const { get, response, loading, error } = useFetch(`${BASE_URL}/actives/all`);

  useEffect(() => {
    getAllAssets();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getAllAssets();
    }, [])
  );

  console.log(loading, error);

  async function getAllAssets() {
    try {
      const assetsResponse: Asset[] = await get();
      if (response.ok) setAssets(assetsResponse);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Banner
          title="Ativos recomendados"
          description="Visualize as oportunidades mais alinhadas com o seu perfil."
          cardList={assets}
        />
      </Content>
    </Container>
  );
};

export default Home;
