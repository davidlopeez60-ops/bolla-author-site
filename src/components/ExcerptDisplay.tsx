interface ExcerptDisplayProps {
  paragraphs: string[];
}

export function ExcerptDisplay({ paragraphs }: ExcerptDisplayProps) {
  return (
    <div className="relative mx-auto max-w-2xl rounded-sm shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
      <div className="border-l-2 border-midtone bg-parchment px-8 py-10 md:px-12 md:py-14">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={`font-body text-parchment-foreground text-lg leading-[1.8] mb-6 last:mb-0 ${i === 0 ? "drop-cap" : ""}`}
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
