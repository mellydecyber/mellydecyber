import { notFound } from 'next/navigation';
import data from '../../../content/data.json';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = data.blog.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  const file = fs.readFileSync(path.join(process.cwd(), 'content', post.mdx), 'utf-8');
  return (
    <article className="p-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <MDXRemote source={file} />
    </article>
  );
}
