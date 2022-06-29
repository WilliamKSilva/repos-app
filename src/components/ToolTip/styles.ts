import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
  align-items: center;
`

export const ToolTipIcon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.white};
`

export const ToolTipContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const ToolTipText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;