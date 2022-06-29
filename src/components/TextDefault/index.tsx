import React from "react";
import { Text } from "./styles";

type TextDefaultProps = {
  title: string | undefined;
}

export function TextDefault({ title }: TextDefaultProps) {
  return (
    <>
      <Text>{title}</Text>
    </>
  )
}