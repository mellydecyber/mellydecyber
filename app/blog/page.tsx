import Link from 'next/link';
import data from '../../content/data.json';

export default function BlogPage() {
  return (
    <div className="p-4 space-y-4">
      {data.blog.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="block p-4 bg-gray-800 rounded">
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <p className="text-sm text-gray-400">{post.excerpt}</p>
        </Link>
      ))}
    </div>
  );
}
