import React from "react";
import Section from "../../components/molecules/Section";
import SectionChart from "../../components/molecules/SectionChart";
import MetricsHeader from "../../components/organisms/MetricsHeader";
import { IMetricsInfo } from "../../interfaces";
import { toChart } from "../../services/utils";
import { BASE_URL, DESCRIPTION, NEED_TO_KNOW } from "../../utils/constants";
import useFetch from "use-http";

import { Container, Content, FooterView } from "./styles";
import { useRoute } from "@react-navigation/native";
import { MetricsScreenRouteProps } from "../../routes/types";
import AddInWalletButton from "../../components/atoms/AddInWalletButton";
import { useEffect } from "react";
import { api } from "../../services/api/axios";
import { useState } from "react";
import { ActivityIndicator } from "react-native";

const metricsInfo: IMetricsInfo = {
  brandingPhotoUrl:
    "https://logospng.org/download/vale/logo-vale-escudo-1536.png",
  brandingTitle: "VALE",
  assetName: "BIDI11",
  description:
    "O ativo VALE3 apresenta indicadores positivos recentemente e você deveria considerar a compra, visto que é um ativo que também está muito presente na carteira de pessoas do seu perfil.",
  chartValues: [8, 10, 4],
};

const Metrics = () => {
  const { params } = useRoute<MetricsScreenRouteProps>();
  const [metricsInfo, setMetricsInfo] = useState<IMetricsInfo>(
    {} as IMetricsInfo
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMetrics();
  }, []);

  async function fetchMetrics() {
    try {
      const response = await api.get(`actives/${params?.assetName}`);
      setMetricsInfo(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <Container>
      {loading ? (
        <ActivityIndicator color="#fca311" />
      ) : (
        <>
          <MetricsHeader
            assetName={metricsInfo?.assetName}
            brandingTitle={metricsInfo?.brandingTitle}
            brandingPhotoUrl={metricsInfo?.brandingPhotoUrl}
          />
          <Content showsVerticalScrollIndicator>
            <Section
              title={DESCRIPTION}
              sectionText={metricsInfo?.description}
            />
            <SectionChart
              title={NEED_TO_KNOW}
              charts={toChart(metricsInfo?.chartValues)}
            />
          </Content>

          <FooterView>
            <AddInWalletButton activeName={metricsInfo?.assetName} />
          </FooterView>
        </>
      )}
    </Container>
  );
};

export default Metrics;
