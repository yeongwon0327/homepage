import { getAllPosts } from '../../lib/posts'
import { Container, Heading, SimpleGrid, Box, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export const getStaticProps = () => {
  const posts = getAllPosts()

  // 최신순 정렬
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return { props: { posts } }
}

export default function BlogIndex({ posts }) {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading mb={6}>Dev log</Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {posts.map((post, i) => (
          <Box
            key={i}
            p={4}
            borderWidth={1}
            borderRadius="md"
            boxShadow="md"
            overflow="hidden"
          >
            <Link
              as={NextLink}
              href={`/devlog${post.slug}`}
              fontSize="lg"
              fontWeight="bold"
              noOfLines={1}
              isTruncated
              color="teal.300"
            >
              {post.title}
            </Link>

            <Text fontSize="sm" color="gray.500">
              {post.date}
            </Text>

            <Text fontSize="md" mt={1} noOfLines={2}>
              {post.summary}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}
