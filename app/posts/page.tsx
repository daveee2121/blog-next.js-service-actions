import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function PostsPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main>
      <h1>Posts</h1>
      <Link href="/posts/new">Neuer Post</Link>


      {posts.length === 0 ? (
        <p>Noch keine Posts vorhanden.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            </Link>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </main>
  );
}