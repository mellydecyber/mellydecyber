import Image from 'next/image';
import Link from 'next/link';
import data from '../content/data.json';

export default function ProfileSidebar() {
  const { profile, stats } = data;
  return (
    <aside className="p-4 bg-gray-800 rounded-xl w-full max-w-xs">
      <Image
        src={profile.avatar}
        alt={profile.name}
        width={80}
        height={80}
        className="rounded-full"
      />
      <h2 className="mt-2 text-xl font-semibold">{profile.name}</h2>
      <p className="text-sm text-gray-400">{profile.headline}</p>
      <ul className="mt-4 text-sm">
        <li>Experience: {stats.years_experience} yrs</li>
        <li>Projects: {stats.projects_shipped}</li>
        <li>OSS contributions: {stats.oss_contributions}</li>
      </ul>
      <div className="flex gap-2 mt-4">
        <Link href={`https://github.com/${profile.socials.github}`}>GitHub</Link>
        <Link href={`https://linkedin.com/in/${profile.socials.linkedin}`}>LinkedIn</Link>
      </div>
    </aside>
  );
}
