// components/HighlightText.tsx
import { Text, useColorModeValue } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface HighlightTextProps {
  children: ReactNode
  fontSize?: string
  fontWeight?: string
  lightColor?: string
  darkColor?: string
  as?: any
  display?: string
  mb?: number | string
}

const HighlightText = ({
  children,
  fontSize = 'highlight',
  fontWeight = 'bold',
  lightColor = 'yellow.600',
  darkColor = '#f1fa8c',
  as = 'span',
  display = 'inline',
  mb,
}: HighlightTextProps) => {
  const color = useColorModeValue(lightColor, darkColor)

  return (
    <Text
      as={as}
      display={display}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      mb={mb}
    >
      {children}
    </Text>
  )
}

export default HighlightText
