interface Day {
  date: string;
  count: number;
}

interface Props {
  data: Day[];
}

export default function Heatmap({ data }: Props) {
  return (
    <div className="grid grid-cols-7 gap-1">
      {data.map((d) => (
        <div
          key={d.date}
          title={`${d.date}: ${d.count}`}
          className={`w-3 h-3 rounded-sm bg-emerald-${Math.min(d.count, 4) * 200}`}
        />
      ))}
    </div>
  );
}
