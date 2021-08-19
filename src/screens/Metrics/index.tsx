import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import Section from "../../components/molecules/Section";
import SectionChart from "../../components/molecules/SectionChart";
import MetricsHeader from "../../components/organisms/MetricsHeader";
import { IMetricsInfo } from "../../interfaces";
import { toChart, wait } from "../../useCase/utils";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMetrics() {
      await wait(1000);
      setMetricsInfo(metricsInfoMock);
      setLoading(false);
    }

    fetchMetrics();
  }, []);

  return (
    <Container>
      {!loading && !!metricsInfo && (
        <Fragment>
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
        </Fragment>
      )}
    </Container>
  );
};

export default Metrics;
