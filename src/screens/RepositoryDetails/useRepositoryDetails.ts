import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { UserReposData } from "../../interfaces/userReposData";

export function useRepositoryDetails() {
  const { params } = useRoute()
  const [ userReposDetailsData, setUserReposDetailsData ] = useState({} as UserReposData)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async function getRepositoryDetails() {      
      try {
        const response = await axios.get(`https://api.github.com/repos/${params?.login}/${params?.name}`)

        setUserReposDetailsData(response.data)        
      } catch(error) {
        console.log(error)        
      } finally {
        setIsLoading(false)
      }
    })()
  }, [params])

  return {
    userReposDetailsData,
    isLoading,
  }
}