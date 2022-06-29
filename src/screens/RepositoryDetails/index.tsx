import React from "react";
import { Loading } from "../../components/Loading";
import { TextDefault } from "../../components/TextDefault";
import { Container, Header, ContainerRow, OwnerAvatar, Title, Text, WrapperOwner, ContainerRowLarge } from "./styles";
import { useRepositoryDetails } from "./useRepositoryDetails";

export default function RepositoryDetails() {
  const { userReposDetailsData, isLoading } = useRepositoryDetails();
  
  return isLoading ? <Loading /> : (
    <Container>
      <Header>
        <Title>{userReposDetailsData.name}</Title>
      </Header>
      <WrapperOwner>
        <OwnerAvatar 
          source={{uri: userReposDetailsData.owner?.avatar_url}}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25
          }}
        />
        <TextDefault title={userReposDetailsData.owner?.login} />
      </WrapperOwner>
      <ContainerRow>
        <Text>Forks: </Text>
        <Text>{userReposDetailsData.forks}</Text>
      </ContainerRow>
      <ContainerRow>
        <Text>Linguagem: </Text>
        <Text>{userReposDetailsData.language}</Text>
      </ContainerRow>
      <ContainerRowLarge>
        <Text>URL: </Text>
        <Text>{userReposDetailsData.url}</Text>
      </ContainerRowLarge>
    </Container>
  )
}