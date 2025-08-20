import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function AboutPage() {
  const file = fs.readFileSync(path.join(process.cwd(), 'content/about.md'), 'utf-8');
  return (
    <article className="p-4 prose prose-invert">
      <MDXRemote source={file} />
    </article>
  );
}
