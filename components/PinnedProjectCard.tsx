import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../lib/types';

interface Props {
  project: Project;
}

export default function PinnedProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`} className="block bg-gray-800 rounded-lg overflow-hidden">
      <Image src={project.cover} alt={project.name} width={600} height={300} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="text-sm text-gray-400">{project.summary}</p>
      </div>
    </Link>
  );
}
