import React from "react";
import { LogBox } from 'react-native'
import { useForm } from 'react-hook-form'
import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";
import { TextDefault } from "../../components/TextDefault";
import { Container, Content, Header, Text, WrapperButton, WrapperText, SearchIcon, WrapperSearch, WrapperSearchIcon, UserAvatar, UserRepo, TextHighlight, Message, WrapperMessage } from "./styles";
import { useHome } from "./useHome";
import { RepositoryList } from "../../components/Repository/RepositoryList";
import { ToolTip } from "../../components/ToolTip";


LogBox.ignoreLogs(["EventEmitter.removeListener"])

export default function Home() {
  const { userLoggedData, getUserRepositories, repositoriesData, isRepositoriesLoading } = useHome()
  const { control, handleSubmit } = useForm()

  return (
    <Container>
      <Header>
        <UserAvatar 
          source={{uri: userLoggedData.avatar_url}} 
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            marginLeft: 15,            
          }}
        />
        <WrapperText>
          <TextDefault 
            title={userLoggedData.name}
          />
          <Text>{userLoggedData.email}</Text>
        </WrapperText>        
      </Header>
      <WrapperButton>
        <Button title="Meus Repos" onPress={() => getUserRepositories({user: userLoggedData.login})} />
      </WrapperButton>
      <UserRepo>
      </UserRepo>      
      <Content>
        <WrapperSearch>
          <ToolTip 
            text="No momento da busca de usuários utilize um 'Username' 
            de um usuário presente no Github. 
            Exemplos de 'Usernames' válidos: WilliamKSilva, 
            vinimedeiros13, felipejsborges, etc." 
          />          
          <InputForm 
            placeholder="Buscar usuário..."
            control={control}
            name="user"
          />
          <WrapperSearchIcon onPress={handleSubmit(getUserRepositories)}>
            <SearchIcon name="search" size={25} />
          </WrapperSearchIcon>
        </WrapperSearch>
        {repositoriesData.length > 1 ? (
          <UserRepo>
            <Text>Repositórios de: </Text>
            <TextHighlight>{repositoriesData[0].owner?.login}</TextHighlight>
          </UserRepo>
        ) : null}
        {repositoriesData.length < 1 ? (
          <WrapperMessage>
            <Message>
              Busque um usuário ou utilize o botão "Meus Repos",
              para conseguir visualizar uma lista de repositórios!
            </Message>
          </WrapperMessage>
        ) : (
          <RepositoryList 
            repositoryData={repositoriesData}
            isLoading={isRepositoriesLoading}                    
          />
        )}
      </Content>
    </Container>
  )
}