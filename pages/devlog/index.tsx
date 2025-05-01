import { getAllPosts } from '../../lib/posts'
import NextLink from 'next/link'
import { Container, Heading, SimpleGrid, Box, Text, Button } from '@chakra-ui/react'

export const getStaticProps = () => {
  const posts = getAllPosts()
  return { props: { posts } }
}

export default function BlogIndex({ posts }) {
    return (
      <Container maxW="container.lg" py={8}>
        <Heading mb={6}>Dev log</Heading>
  
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {posts.map((post, i) => (
            <Box key={i} p={4} borderWidth={1} borderRadius="md" boxShadow="md">
              <NextLink href={`/devlog${post.slug}`} passHref>
                <Button variant="link" colorScheme="teal" fontSize="lg">
                  {post.title}
                </Button>
              </NextLink>
              <Text fontSize="sm" color="gray.500">
                {post.date}
              </Text>
              <Text>{post.summary}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    )
  }
  