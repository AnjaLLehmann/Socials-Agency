type Props = {
  title: string;
  description: string;
  points?: string[];
};

export default function ServiceCard({ title, description, points }: Props) {
  return (
    <div className="card h-full">
      <h3 className="font-display text-xl text-espresso">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-espresso-light">{description}</p>
      {points && points.length > 0 && (
        <ul className="mt-5 space-y-2">
          {points.map((point) => (
            <li key={point} className="flex gap-3 text-sm text-espresso">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
