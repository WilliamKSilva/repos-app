import React, { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Container, GithubIcon, Title } from "./styles";
import * as WebBrowser from 'expo-web-browser'
import { loadAsync } from "expo-auth-session";


type LoginButtonProps = {
  title: string;
}

WebBrowser.maybeCompleteAuthSession();

export function LoginButton({ title }: LoginButtonProps) {
  const { handleSignIn } = useAuth()
  
  return (
    <Container onPress={handleSignIn}>
      <Title>{title}</Title>
      <GithubIcon name="github" size={25} />
    </Container>
  )
}