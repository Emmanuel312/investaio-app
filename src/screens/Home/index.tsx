import React, { useEffect } from "react";
import Banner from "../../components/organisms/Banner";
import Header from "../../components/organisms/Header";
import { Asset } from "../../interfaces";
import { useFocusEffect } from "@react-navigation/native";
import { Container, Content } from "./styles";
import { useState } from "react";
import { api } from "../../services/api/axios";
import { ActivityIndicator } from "react-native";
import { useStore } from "../../services/store";

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
  const { assets, setAssets } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllAssets();
  }, []);

  async function getAllAssets() {
    try {
      const response = await api.get<Asset[]>("/actives/all");
      setAssets(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        {loading ? (
          <ActivityIndicator color="#fca311" />
        ) : (
          <Banner
            title="Ativos recomendados"
            description="Visualize as oportunidades mais alinhadas com o seu perfil."
            cardList={assets}
          />
        )}
      </Content>
    </Container>
  );
};

export default Home;
