import ProfileSidebar from '../components/ProfileSidebar';
import PinnedProjectCard from '../components/PinnedProjectCard';
import Heatmap from '../components/Heatmap';
import data from '../content/data.json';

export default function HomePage() {
  const pinned = data.projects.filter((p) => p.pinned);
  return (
    <div className="flex w-full">
      <ProfileSidebar />
      <div className="flex-1 p-4 space-y-8">
        <section>
          <h2 className="text-2xl font-bold">Pinned Projects</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {pinned.map((p) => (
              <PinnedProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Contributions</h2>
          <Heatmap data={data.contributions.heatmap} />
        </section>
      </div>
    </div>
  );
}
