'use server'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

export async function createPost(formData: FormData) {
  await prisma.post.create({
    data: {
      title: formData.get('title') as string,
      content: formData.get('content') as string,
    },
  })
  redirect('/posts')
}

export async function updatePost(formData: FormData) {
  const id = parseInt(formData.get('id') as string)
  await prisma.post.update({
    where: { id },
    data: {
      title: formData.get('title') as string,
      content: formData.get('content') as string,
    },
  })
  redirect('/posts')
}

export async function deletePost(formData: FormData) {
  const id = parseInt(formData.get('id') as string)
  await prisma.post.delete({ where: { id } })
  redirect('/posts')
}