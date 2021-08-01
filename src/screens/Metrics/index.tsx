import React from "react";
import Section from "../../components/molecules/Section";
import MetricsHeader from "../../components/organisms/MetricsHeader";
import { IMetricsInfo } from "../../interfaces";
import { DESCRIPTION, NEED_TO_KNOW } from "../../utils/constants";

import { Container, Content } from "./styles";

const metricsInfo: IMetricsInfo = {
  brandingPhotoUrl:
    "https://logospng.org/download/vale/logo-vale-escudo-1536.png",
  brandingTitle: "VALE",
  assetName: "BIDI11",
  description:
    "O ativo VALE3 apresenta indicadores positivos recentemente e você deveria considerar a compra, visto que é um ativo que também está muito presente na carteira de pessoas do seu perfil.",
  textInfo:
    "O ativo apresenta indicadores muito positivos. As médias móveis exponenciais dos últimos 25 e 50 dias são maiores que as simples. Isso é um indicador positivo porque as médias moveis exponenciais aplicam um peso maior aos dias mais recentes, ou seja, isso mostra que VALE3 está perfomando melhor no momento atual. O RSI também está ótimo, em 64,61. O RSI é o índice de força relativa, e é calculado a partir da razão entre os dias em que tivemos retornos positivos e negativos nos últimos dias. Quando esse índice é acima de 60, podemos chamar a ação de forte.",
};

const Metrics = () => {
  return (
    <Container>
      <MetricsHeader
        assetName={metricsInfo.assetName}
        brandingTitle={metricsInfo.brandingTitle}
        brandingPhotoUrl={metricsInfo.brandingPhotoUrl}
      />
      <Content showsVerticalScrollIndicator>
        <Section title={DESCRIPTION} sectionText={metricsInfo.description} />
        <Section title={NEED_TO_KNOW} sectionText={metricsInfo.textInfo} />
      </Content>
    </Container>
  );
};

export default Metrics;
