import React from "react";
import { LoginButton } from "../../components/LoginButton";
import { Container, Logo, Main } from "./styles";

export default function Login() {
  return (
    <Container>
      <Main>
        <Logo>Github Repos</Logo>
        <LoginButton title="Login com Github" />
      </Main>
    </Container>
  )
}