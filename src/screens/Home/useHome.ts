import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../../context/User'
import { UserReposData } from '../../interfaces/userReposData';

type UserLoggedData = {
  avatar_url: string;
  email: string;
  followers: number;
  following: number;
  name: string;
  login: string;
}

type InputDataSubmit = {
  user: string;
}

export function useHome() {
  const { accessToken } = useContext(UserContext)

  const [userLoggedData, setUserLoggedData] = useState({} as UserLoggedData)
  const [repositoriesData, setRepositoriesData] = useState([] as UserReposData[])
  const [isRepositoriesLoading, setIsRepositoriesLoading] = useState<boolean>()

  useEffect(() => {
    (async function getLoggedUserData() {
      try {
        const response = await axios.get('https://api.github.com/user', {
          headers: {
            'Authorization': 'Bearer ' + accessToken
          }
        })

        setUserLoggedData(response.data)
      } catch(error) {
        console.log(error);
      }
    })()
  }, [])

  async function getUserRepositories({ user }: InputDataSubmit) {
    setIsRepositoriesLoading(true)
    try {
      const response = await axios.get(`https://api.github.com/users/${user}/repos?type=owner`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      setRepositoriesData(response.data)
    } catch(error) {
      console.log(error);
    } finally {
      setIsRepositoriesLoading(false)
    }
  }

  return {
    userLoggedData,
    getUserRepositories,
    repositoriesData,
    isRepositoriesLoading,
  }
}