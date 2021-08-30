import React from "react";
import {
  Container,
  Header,
  Title,
  QuestionText,
  QuestionCardListView,
  SkipView,
  SkipText,
} from "./styles";
import { QuestionAsset } from "../../interfaces";
import QuestionCardList from "../../components/organisms/QuestionCardList";
import { useState } from "react";

const assetsTest: QuestionAsset[] = [
  {
    brandingPhotoUrl: "https://logospng.org/wp-content/uploads/banco-inter.png",
    brandingTitle: "INTER",
    assetName: "BIDI11",
    description:
      "A ação do Banco Inter apresentou um retorno alto no último ano, com baixa volatilidade. Isso significa que quem comprou, tomou pouco risco e teve bons retornos. É indicada para perfis mais conservadores.",
  },
  {
    brandingPhotoUrl: "https://i.imgur.com/JePkiGG.png",
    brandingTitle: "BRF",
    assetName: "BRFS3",
    description:
      "A ação da BRF apresenta retornos dentro do padrão nos últimos anos, porém há uma volatilidade muito grande. Isso significa que é uma ação mais indicada para perfis moderados.",
  },
  {
    brandingPhotoUrl:
      "https://logospng.org/download/vale/logo-vale-escudo-1536.png",
    brandingTitle: "VALE",
    assetName: "VALE3",
    description:
      "A ação da Vale apresenta bons retornos nos últimos anos, porém há uma volatilidade muito grande. Isso significa que é uma ação mais indicada para perfis arriscados.",
  },
];

const ProfileTest = () => {
  const [skip, setSkip] = useState(false);

  return (
    <Container>
      <Header>
        <Title>Teste de Personalidade</Title>
        <QuestionText>Você escolheria esse ativo?</QuestionText>
      </Header>
      <QuestionCardListView>
        <QuestionCardList
          assetsList={assetsTest}
          skip={skip}
          setSkip={setSkip}
        />
      </QuestionCardListView>

      <SkipView onPress={() => setSkip(true)}>
        <SkipText>Pular essa e me mostre uma pergunta diferente</SkipText>
      </SkipView>
    </Container>
  );
};

export default ProfileTest;
