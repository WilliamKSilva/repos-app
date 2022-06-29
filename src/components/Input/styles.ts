import styled from 'styled-components/native'

export const Container = styled.TextInput`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 10px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
`