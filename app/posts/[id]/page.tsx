import { getPostById } from '@/lib/api'
import DeletePostButton from '@/components/DeletePostButton'
import Link from 'next/link'

export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const post = await getPostById(parseInt(id))

  if (!post) return <p>Post nicht gefunden.</p>

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link href={`/posts/${post.id}/edit`}>Bearbeiten</Link>
      <DeletePostButton postId={post.id} />
      <Link href="/posts">Zurück</Link>
    </main>
  )
}
