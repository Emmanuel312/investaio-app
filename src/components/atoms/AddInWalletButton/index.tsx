import React from "react";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import { Asset } from "../../../interfaces";
import { api } from "../../../services/api/axios";
import { useStore } from "../../../services/store";

import { Container, AddToWalletText } from "./styles";

interface Props {
  activeName: string;
}

const AddInWalletButton = ({ activeName }: Props) => {
  const { setAssets } = useStore();
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  async function handleAddToWallet() {
    try {
      setLoading(true);
      const response = await api.post<Asset[]>("actives", {
        active_name: activeName,
      });

      setAssets(response.data);
      setDisable(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  function handleTextInfo() {
    return disable ? "Adicionado à sua carteira!" : "Adicionar à sua carteira";
  }

  return (
    <Container onPress={handleAddToWallet} disabled={disable}>
      {loading ? (
        <ActivityIndicator color="##000" />
      ) : (
        <AddToWalletText>{handleTextInfo()}</AddToWalletText>
      )}
    </Container>
  );
};

export default AddInWalletButton;
