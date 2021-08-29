import React from "react";

import { Container, QuestionCardListView, SkipView, SkipText } from "./styles";

import { AssetCore } from "../../interfaces";
import QuestionCardList from "../../components/organisms/QuestionCardList";
import { useState } from "react";
import { useEffect } from "react";

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
  const [skip, setSkip] = useState(false);

  return (
    <Container>
      <QuestionCardListView>
        <QuestionCardList
          assetsList={assetsTest}
          skip={skip}
          setSkip={setSkip}
        />
      </QuestionCardListView>

      <SkipView onPress={() => setSkip(true)}>
        <SkipText>Pular essa, e me mostre uma pergunta diferente</SkipText>
      </SkipView>
    </Container>
  );
};

export default ProfileTest;
