import { getPosts } from '@/lib/api'
import PostList from '@/components/PostList'
import Link from 'next/link'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <main>
      <h1>Posts</h1>
      <Link href="/posts/new">Neuer Post</Link>
      <PostList posts={posts} />
    </main>
  )
}
