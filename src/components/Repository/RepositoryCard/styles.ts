import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 340px;
  min-height: 150px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  border-radius: 10px;
`

export const Name = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 800;
`

export const Description = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
`