import data from '../../content/data.json';

export default function ExperiencePage() {
  return (
    <div className="p-4 space-y-6">
      {data.experiences.map((exp) => (
        <div key={exp.company} className="bg-gray-800 p-4 rounded">
          <h3 className="text-lg font-semibold">{exp.role} @ {exp.company}</h3>
          <p className="text-sm text-gray-400">{exp.start} – {exp.end ?? 'Present'}</p>
          <ul className="list-disc ml-4 mt-2 text-sm">
            {exp.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
