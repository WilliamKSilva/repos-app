import styled from 'styled-components/native'
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  width: 100%;
  border-radius: 15px;
  padding-vertical: 10%;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`

export const UserAvatar = styled.Image``

export const WrapperText = styled.View`
  justify-content: space-between;
  padding: 15px;
`

export const Text = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white}
`

export const Content = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 15%;
`

export const WrapperButton = styled.View`
  width: 30%;
  padding: 10px;
  margin-top: 15px;
`

export const WrapperSearch = styled.View`
  width: 100%;
  padding-bottom: 10%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const WrapperSearchIcon = styled.TouchableOpacity``;

export const SearchIcon = styled(FontAwesome)`
  color: ${({ theme }) => theme.colors.white};
  margin-left: 20px;
`

export const UserRepo = styled.View`
  width: 65%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TextHighlight = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-weight: 800;
`

export const WrapperMessage = styled.View`
width: 80%;
margin-top: 20%;
`

export const Message = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray};
  align-items: center;
  text-align: center;
`