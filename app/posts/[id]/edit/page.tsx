import { getPostById } from '@/lib/api'
import EditPostForm from '@/components/EditPostForm'

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const post = await getPostById(parseInt(id))

  if (!post) return <p>Post nicht gefunden.</p>

  return (
    <main>
      <h1>Post bearbeiten</h1>
      <EditPostForm post={post} />
    </main>
  )
}
