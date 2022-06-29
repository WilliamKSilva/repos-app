import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
`
export const Header = styled.View`
  width: 80%;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  margin-top: 20%;
`

export const Title = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primaryLight};
`

export const WrapperOwner = styled.View`
  width: 50%;
  margin-top: 25px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const OwnerAvatar = styled.Image``

export const ContainerRow = styled.View`
  width: 50%;
  margin-top: 50px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const ContainerRowLarge = styled.View`
  width: 80%;
  margin-top: 50px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`
export const Text = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
`