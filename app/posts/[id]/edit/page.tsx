import { prisma } from '@/lib/prisma'
import { updatePost } from '@/app/actions'

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  const post = await prisma.post.findUnique({
    where: { id: parseInt(id) },
  })

  if (!post) return <p>Post nicht gefunden.</p>

  return (
    <main>
      <h1>Post bearbeiten</h1>
      <form action={updatePost}>
        <input type="hidden" name="id" value={post.id} />
        <div>
          <label>Titel</label>
          <input name="title" defaultValue={post.title} required />
        </div>
        <div>
          <label>Inhalt</label>
          <textarea name="content" defaultValue={post.content} required />
        </div>
        <button type="submit">Speichern</button>
      </form>
    </main>
  )
}