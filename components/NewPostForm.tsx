'use client'
import { createPostAction } from '@/lib/actions'

export default function NewPostForm() {
  return (
    <form action={createPostAction}>
      <div>
        <label>Titel</label>
        <input name="title" required />
      </div>
      <div>
        <label>Inhalt</label>
        <textarea name="content" required />
      </div>
      <button type="submit">Erstellen</button>
    </form>
  )
}
