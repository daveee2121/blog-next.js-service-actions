import { prisma } from '@/lib/prisma'

export async function getPosts() {
  return prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
  })
}

export async function getPostById(id: number) {
  return prisma.post.findUnique({
    where: { id },
  })
}

export async function createPost(data: { title: string; content: string }) {
  return prisma.post.create({ data })
}

export async function updatePost(id: number, data: { title: string; content: string }) {
  return prisma.post.update({ where: { id }, data })
}

export async function deletePost(id: number) {
  return prisma.post.delete({ where: { id } })
}
