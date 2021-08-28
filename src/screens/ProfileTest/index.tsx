import React from "react";
import useFetch from "use-http";

import { Container, QuestionCardListView, SkipView, SkipText } from "./styles";
import { BASE_URL } from "../../utils/constants";
import QuestionCard from "../../components/molecules/QuestionCard";
import { AssetCore } from "../../interfaces";
import QuestionCardList from "../../components/organisms/QuestionCardList";

const assetsTest: AssetCore[] = [
  {
    brandingPhotoUrl: "https://logospng.org/wp-content/uploads/banco-inter.png",
    brandingTitle: "INTER",
    assetName: "BIDI11",
  },
  {
    brandingPhotoUrl:
      "https://logospng.org/download/vale/logo-vale-escudo-1536.png",
    brandingTitle: "VALE",
    assetName: "VALE3",
  },
];

const ProfileTest = () => {
  return (
    <Container>
      <QuestionCardListView>
        <QuestionCardList assetsList={assetsTest} />
      </QuestionCardListView>

      <SkipView>
        <SkipText>Pular essa, e me mostre uma pergunta diferente</SkipText>
      </SkipView>
    </Container>
  );
};

export default ProfileTest;
