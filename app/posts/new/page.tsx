import { createPost } from '@/app/actions'

export default function NewPostPage() {
  return (
    <main>
      <h1>Neuer Post</h1>
      <form action={createPost}>
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
    </main>
  )
}