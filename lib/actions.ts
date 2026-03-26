'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createPost, updatePost, deletePost } from '@/lib/api'

export async function createPostAction(formData: FormData) {
  await createPost({
    title: formData.get('title') as string,
    content: formData.get('content') as string,
  })
  revalidatePath('/posts')
  redirect('/posts')
}

export async function updatePostAction(formData: FormData) {
  const id = parseInt(formData.get('id') as string)
  await updatePost(id, {
    title: formData.get('title') as string,
    content: formData.get('content') as string,
  })
  revalidatePath('/posts')
  redirect('/posts')
}

export async function deletePostAction(formData: FormData) {
  const id = parseInt(formData.get('id') as string)
  await deletePost(id)
  revalidatePath('/posts')
  redirect('/posts')
}
