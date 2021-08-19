import React, { useState } from "react";
import { useEffect } from "react";
import Section from "../../components/molecules/Section";
import MetricsHeader from "../../components/organisms/MetricsHeader";
import { IMetricsInfo } from "../../interfaces";
import { wait } from "../../services/utils";
import { DESCRIPTION, NEED_TO_KNOW } from "../../utils/constants";

import { Container, Content } from "./styles";

const metricsInfoMock: IMetricsInfo = {
  brandingPhotoUrl:
    "https://logospng.org/download/vale/logo-vale-escudo-1536.png",
  brandingTitle: "VALE",
  assetName: "BIDI11",
  description:
    "O ativo VALE3 apresenta indicadores positivos recentemente e você deveria considerar a compra, visto que é um ativo que também está muito presente na carteira de pessoas do seu perfil.",
  chartValues: [8, 10, 4],
};

const Metrics = () => {
  const [metricsInfo, setMetricsInfo] = useState({} as IMetricsInfo);

  useEffect(() => {
    async function fetchMetrics() {
      await wait(1000);
      setMetricsInfo(metricsInfoMock);
    }

    fetchMetrics();
  }, []);

  return (
    <Container>
      <MetricsHeader
        assetName={metricsInfo?.assetName}
        brandingTitle={metricsInfo?.brandingTitle}
        brandingPhotoUrl={metricsInfo?.brandingPhotoUrl}
      />
      <Content showsVerticalScrollIndicator>
        <Section title={DESCRIPTION} sectionText={metricsInfo?.description} />
      </Content>
    </Container>
  );
};

export default Metrics;
