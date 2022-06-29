import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  width: 250px;
  padding: 15px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
`

export const GithubIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.white};
  margin-left: 10px;
`