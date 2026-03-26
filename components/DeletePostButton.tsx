'use client'
import { deletePostAction } from '@/lib/actions'

type Props = {
  postId: number
}

export default function DeletePostButton({ postId }: Props) {
  return (
    <form action={deletePostAction}>
      <input type="hidden" name="id" value={postId} />
      <button type="submit">Löschen</button>
    </form>
  )
}
