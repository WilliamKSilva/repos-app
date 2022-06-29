import { UserReposData } from "../../../interfaces/userReposData";
import { Loading } from "../../Loading";
import { RepositoryCard } from "../RepositoryCard";
import { Container } from "./styles";

type RepositoryListProps = {
  repositoryData: UserReposData[];
  isLoading: boolean | undefined;
}

type RepositoryCardProps = {
  item: UserReposData;
}

export function RepositoryList({ repositoryData, isLoading }: RepositoryListProps) {
  return isLoading ? <Loading /> : (
    <Container 
      data={repositoryData}
      renderItem={({ item }: RepositoryCardProps) => (
        <RepositoryCard
          id={item.id}
          owner={item.owner} 
          name={item.name}
          description={item.description}          
        />
      )}
      keyExtractor={(item: any) => item.id}
      key={repositoryData.length}      
    />
  )
}