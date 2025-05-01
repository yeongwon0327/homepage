import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPosts } from '../../lib/posts'
import { Container, Heading, Box, Text, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import PdfViewer from '../../components/PdfViewer'

const components = {
  PdfViewer,
}

type BlogPostProps = {
  source: MDXRemoteSerializeResult
  frontMatter: {
    title: string
    date: string
    summary?: string
  }
}

const POSTS_PATH = path.join(process.cwd(), 'devlog')

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts()
  return {
    paths: posts.map(post => ({
      params: { slugs: post.slug.split('/').filter(Boolean) }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slugs = (params?.slugs as string[]) || []
  const filePath = path.join(POSTS_PATH, ...slugs) + '.mdx'
  const source = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(source)
  const mdxSource = await serialize(content) // 타입 추론 OK

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  }
}

export default function BlogPost({ source, frontMatter }: BlogPostProps) {
  return (
    
    <Container maxW="container.md" py={8}>
      <Heading>{frontMatter.title}</Heading>
      <Text mb={4} color="gray.500">{frontMatter.date}</Text>

      <MDXRemote {...source} components={components} />

      <Box display="flex" justifyContent="center" mt={10}>
        <Button as={NextLink} href="/devlog" colorScheme="teal">
          Return to dev log
        </Button>
      </Box>
    </Container>

  )
}
