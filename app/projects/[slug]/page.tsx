import { notFound } from 'next/navigation';
import data from '../../../content/data.json';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Callout from '../../../components/Callout';

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = data.projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();
  const file = fs.readFileSync(path.join(process.cwd(), 'content', project.case_study_mdx), 'utf-8');
  return (
    <article className="p-4">
      <h1 className="text-3xl font-bold">{project.name}</h1>
      <MDXRemote source={file} components={{ Callout }} />
    </article>
  );
}
