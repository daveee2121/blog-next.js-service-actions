'use client'
import { updatePostAction } from '@/lib/actions'

type Props = {
  post: { id: number; title: string; content: string }
}

export default function EditPostForm({ post }: Props) {
  return (
    <form action={updatePostAction}>
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
  )
}
