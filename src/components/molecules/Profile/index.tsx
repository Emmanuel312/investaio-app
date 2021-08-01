import React from "react";
import { USERNAME, WELCOME } from "../../../utils/constants";

import { Container, Avatar, WelcomeText, Username, Info } from "./styles";

const Profile = () => {
  return (
    <Container>
      <Avatar
        source={{
          uri: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
        }}
      />
      <Info>
        <WelcomeText>{WELCOME}</WelcomeText>
        <Username>{USERNAME}</Username>
      </Info>
    </Container>
  );
};

export default Profile;
