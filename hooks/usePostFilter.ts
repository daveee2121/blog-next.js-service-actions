'use client'
import { useState } from 'react'

type Post = {
  id: number
  title: string
  content: string
}

export function usePostFilter(posts: Post[]) {
  const [query, setQuery] = useState('')

  const filtered = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase())
  )

  return { query, setQuery, filtered }
}
