import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  min-height: 38px;
  min-width: 100px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`

export const Text = styled.Text`
  font-size: 15px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
`
