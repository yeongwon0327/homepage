import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" marginTop="5em">
      This website was inspired by
      {' '}
      <a href="https://www.craftz.dog/" target="_blank" rel="noopener noreferrer">
        Takuya Matsuyama&apos;s website
      </a>.
    </Box>
  )
}

export default Footer
