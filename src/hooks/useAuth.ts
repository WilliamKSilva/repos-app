import axios from "axios";
import * as WebBrowser from 'expo-web-browser';
import { loadAsync } from 'expo-auth-session';
import { useContext } from "react";
import { UserContext } from "../context/User";
import { useNavigation } from "@react-navigation/native";

interface AuthorizeResponse {
  client_id: string;
  redirect_uri: string;
}

WebBrowser.maybeCompleteAuthSession();

export function useAuth() {
  const { accessToken, setAccessToken } = useContext(UserContext);
  const { navigate } = useNavigation()

  const redirect_uri = 'https://auth.expo.io/@williamkds/repos-app'
  const client_id = 'b5c8080f1bb4db6b51cc'
  const client_secret = '7f0afe34e641eb702422a28b0a6ea6830807360a'
  const scope = encodeURI('user repo')

  async function handleSignIn() {
    
    const discovery = {
      authorizationEndpoint: `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`,
    };
    
    await loadAsync({
      clientId: client_id,
      redirectUri: redirect_uri,
    },
    discovery
    ).then(request => request.promptAsync(discovery, { useProxy: true }))
    .then(result => { 
      if (result.type === 'success') {
        const access_token = async () => {
          try {
            const response = await axios.post(`https://github.com/login/oauth/access_token?&code=${result.params.code}&client_id=${client_id}&client_secret=${client_secret}`, null, {
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
              },
            })
  
            setAccessToken(response.data.access_token)
            navigate('Home')
          } catch(error) {
            console.log(error)
          }
        }
        access_token()
      }
    });
  }

  async function handleLogout() {
    try {
      const response = await axios.delete(`https://github.com/applications/${client_id}/token`, {
        headers: {         
          'Authorization': `Bearer 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`
        },
        data: {
          access_token: accessToken
        }                
      })
      
      console.log(response)
      navigate('Login')
    } catch(error) {
      console.log(error)
    }
  }

  return {
    handleSignIn,
    handleLogout,
  }
}