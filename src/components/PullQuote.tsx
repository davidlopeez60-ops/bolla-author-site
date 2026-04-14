interface PullQuoteProps {
  quote: string;
  attribution: string;
}

export function PullQuote({ quote, attribution }: PullQuoteProps) {
  return (
    <blockquote className="relative border-l-3 border-gold pl-6 py-2">
      <span className="absolute -left-2 -top-4 font-display text-6xl text-gold opacity-40 leading-none">&ldquo;</span>
      <p className="font-display italic text-foreground text-lg md:text-2xl leading-relaxed">
        {quote}
      </p>
      <footer className="mt-4 text-muted-foreground text-sm tracking-widest uppercase">
        {attribution}
      </footer>
    </blockquote>
  );
}
