import React from "react";
import { Container, Text } from "./styles";

type ButtonProps = {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress }: ButtonProps) {
  return (
    <Container onPress={() => onPress()}>
      <Text>{title}</Text>
    </Container>
  )
}