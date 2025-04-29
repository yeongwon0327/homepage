import NextLink from 'next/link'
import { Container, Heading, SimpleGrid, Box, Divider, Button, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PubGridItem, PubGridItemLink } from '../components/grid-item'

const Publications = () => (
  <Layout title="Publications">
    <Container maxW="100%">
      <Heading as="h3" fontSize={20} mb={4}>
        Publications
      </Heading>
      
      <SimpleGrid columns={{sm:1}} gap={6}>
        {/* <Section>
          <PubGridItem
            id="-"
            title="-"
            thumbnail={-}
            journal="IEEE/CVF"
            project_page="-"
            author=<p>- <b>-</b>, -</p>
            paper="-"
            video="none"
            code="none"
            slides="none"
          >
          </PubGridItem>
        </Section> */}
        
       
      </SimpleGrid>
      <Divider my={6} />
      <Text textAlign="center">
        I’m currently diving deep into research to publish my first paper as soon as possible. Stay tuned!
      </Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Return to home
        </Button>
      </Box>

    <Box align="center" h="5em">
    </Box>
    </Container>
  </Layout>
)

export default Publications
export { getStaticProps } from '../components/chakra'