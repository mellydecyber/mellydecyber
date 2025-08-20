import Link from 'next/link';
import data from '../../content/data.json';

export default function ProjectsPage() {
  return (
    <div className="p-4 space-y-4">
      {data.projects.map((p) => (
        <Link key={p.slug} href={`/projects/${p.slug}`} className="block p-4 bg-gray-800 rounded">
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <p className="text-sm text-gray-400">{p.summary}</p>
        </Link>
      ))}
    </div>
  );
}
