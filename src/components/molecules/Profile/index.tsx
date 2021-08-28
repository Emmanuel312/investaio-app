import React from "react";
import { USERNAME, WELCOME } from "../../../utils/constants";
import profilePerson from "../../../assets/profile-person.png";

import {
  Container,
  AvatarView,
  Avatar,
  WelcomeText,
  Username,
  Info,
} from "./styles";

const Profile = () => {
  return (
    <Container>
      <AvatarView>
        <Avatar source={profilePerson} />
      </AvatarView>
      <Info>
        <WelcomeText>{WELCOME}</WelcomeText>
        <Username>{USERNAME}</Username>
      </Info>
    </Container>
  );
};

export default Profile;
