'use client'
import Link from 'next/link'
import { usePostFilter } from '@/hooks/usePostFilter'

type Post = {
  id: number
  title: string
  content: string
}

type Props = {
  posts: Post[]
}

export default function PostList({ posts }: Props) {
  const { query, setQuery, filtered } = usePostFilter(posts)

  return (
    <div>
      <input
        type="text"
        placeholder="Posts durchsuchen..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filtered.length === 0 ? (
        <p>Keine Posts gefunden.</p>
      ) : (
        filtered.map((post) => (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </div>
  )
}
