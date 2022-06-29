import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Main = styled.View`
  height: 40%;
  margin-top: 50%;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.Text`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.white};
`