import { useNavigation } from "@react-navigation/native";
import { UserReposData } from "../../../interfaces/userReposData";
import { Container, Description, Name } from "./styles";

export function RepositoryCard({ name, description, id, owner }: UserReposData) {
  const { navigate } = useNavigation()
  
  return (
    <Container key={id} onPress={() => navigate('RepositoryDetails', { name, login: owner?.login })}>
      <Name>{name}</Name>
      <Description>{!description ? 'Não há descrição para este repositório!' : description}</Description>
    </Container>
  )
}