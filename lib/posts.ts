import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sync } from 'glob'

const POSTS_PATH = path.join(process.cwd(), 'devlog')

export const getAllPosts = () => {
  const paths = sync(`${POSTS_PATH}/**/*.mdx`)
  return paths.map((filePath) => {
    const source = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(source)
    const slug = '/' + path.relative(POSTS_PATH, filePath).replace(/\.mdx$/, '')
    
    return {
      slug,
      title: data.title,
      date: data.date,
      summary: data.summary,
      pinned: data.pinned === true || data.pinned === 'true'
    }
  })
}
