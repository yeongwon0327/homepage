import { getAllPosts } from '../../lib/posts'
import NextLink from 'next/link'
import { Container, Heading, List, ListItem, Text, Button } from '@chakra-ui/react'

export const getStaticProps = () => {
  const posts = getAllPosts()
  return { props: { posts } }
}

export default function BlogIndex({ posts }) {
  return (
    <Container maxW="container.md" py={8}>
      <Heading mb={6}>Dev log</Heading>
      {posts.length === 0 ? (
        <Text>No logs posts yet.</Text>
      ) : (
        <List spacing={4}>
          {posts.map((post, i) => (
            <ListItem key={i}>
              <NextLink href={`/devlog${post.slug}`} passHref>
                <Button variant="link" colorScheme="teal">
                  {post.title}
                </Button>
              </NextLink>
              <Text fontSize="sm" color="gray.500">{post.date}</Text>
              <Text>{post.summary}</Text>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  )
}
