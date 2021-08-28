import React from "react";
import { useState } from "react";
import useFetch from "use-http";
import { BASE_URL } from "../../../utils/constants";

import { Container, AddToWalletText } from "./styles";

interface Props {
  activeName: string;
}

const AddInWalletButton = ({ activeName }: Props) => {
  const { post, response, loading, error } = useFetch(`${BASE_URL}/actives`);
  const [disable, setDisable] = useState(false);

  console.log(loading, error, disable);

  async function handleAddToWallet() {
    try {
      await post("/", { active_name: activeName });
      if (response.ok) setDisable(true);
    } catch (error) {
      console.log(error);
    }
  }

  function handleTextInfo() {
    return disable ? "Adicionado à sua carteira!" : "Adicionar à sua carteira";
  }

  return (
    <Container onPress={handleAddToWallet} disabled={disable}>
      <AddToWalletText>{handleTextInfo()}</AddToWalletText>
    </Container>
  );
};

export default AddInWalletButton;
