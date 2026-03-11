import { prisma } from '@/lib/prisma'
import { deletePost } from '@/app/actions'
import Link from 'next/link'

export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  const post = await prisma.post.findUnique({
    where: { id: parseInt(id) },
  })

  if (!post) return <p>Post nicht gefunden.</p>

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link href={`/posts/${post.id}/edit`}>Bearbeiten</Link>
      <form action={deletePost}>
        <input type="hidden" name="id" value={post.id} />
        <button type="submit">Löschen</button>
      </form>
      <Link href="/posts">Zurück</Link>
    </main>
  )
}