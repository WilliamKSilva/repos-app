import { useTheme } from "styled-components";
import { ActivityIndicator, Container } from "./styles";


export function Loading() {
  const { colors } = useTheme()

  return (
    <Container>
      <ActivityIndicator color={colors.primaryLight} size="large" />
    </Container>
  )
}