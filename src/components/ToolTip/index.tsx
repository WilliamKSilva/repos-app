import { useState } from 'react'
import Tooltip from 'react-native-walkthrough-tooltip'
import { useTheme } from 'styled-components'
import { Container, ToolTipContainer, ToolTipIcon, ToolTipText } from './styles'

type ToolTipProps = {
  text: string;
}

export function ToolTip({ text }: ToolTipProps) {
  const { colors } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  
  return (
    <>
      <Tooltip 
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        contentStyle={{
          backgroundColor: colors.primary,
          width: 320,
          height: 130,
          alignItems: 'center'          
        }}
        content={
          <ToolTipContainer>
            <ToolTipText>
              {text}
            </ToolTipText>
          </ToolTipContainer>
        }
      >
        <Container onPress={() => setIsVisible(!isVisible)}>
            <ToolTipIcon name="information-circle" size={25} />
        </Container>
      </Tooltip>
    </>
  )
}