import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatedSection } from "../components/AnimatedSection";
import { ExcerptDisplay } from "../components/ExcerptDisplay";
import { GoldDivider } from "../components/GoldDivider";
import bookCover from "../assets/book-cover.jpg";
import bookCoverFull from "../assets/book-cover-full.jpg";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "A Space on the Wall — The Novel by John Bolla" },
      { name: "description", content: "A Space on the Wall: a taut thriller moving between hospital corridors and cold cases. Published by Parker Publishers, 2026." },
      { property: "og:title", content: "A Space on the Wall by John Bolla" },
      { property: "og:description", content: "A physician. A detective. A woman who vanished. And the one clue that changes everything." },
    ],
  }),
  component: BookPage,
});

const retailers = [
  { name: "Amazon", href: "#" },
  { name: "Barnes & Noble", href: "#" },
  { name: "IndieBound", href: "#" },
  { name: "Parker Publishers", href: "#" },
];

const excerptParagraphs = [
  "Alec Barnes had been running marathons for fifteen years, and in that time he had learned exactly two things about himself: that he was incapable of quitting once he'd started something, and that this quality was not always a virtue.",
  "The morning of the Bayshore Half, the air was thick with salt and the promise of rain. He stood at the starting line among three hundred other runners, most of them younger, most of them faster, none of them carrying what he carried.",
  "He'd blow it up to whatever size current technology would allow, frame it, and hang it on the wall in the clubhouse next to his father's. That was the plan. That had always been the plan. A space on the wall — his space — waiting for him to earn it.",
  "But the run that morning would not end at the finish line. It would end on a quiet suburban street, at the edge of a yard where a child's bicycle lay on its side in the grass, one wheel still spinning.",
];

function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface grain-overlay py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src={bookCover}
                  alt="A Space on the Wall book cover"
                  className="book-tilt w-72 md:w-80 rounded-sm"
                  width={800}
                  height={1200}
                />
              </div>
              <div>
                <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">A Space on the Wall</h1>
                <p className="font-handwriting text-gold-bright text-xl mb-6">by John Bolla</p>
                <GoldDivider className="!my-6 !w-24" />
                <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
                  Alec Barnes is a physician with a marathon obsession and a family legacy he can&apos;t outrun. When a child disappears from a quiet suburban street in the span of a heartbeat, he&apos;s the only witness — and the only one who knows what he saw. What follows is a taut, compassionate thriller that moves between hospital corridors and cold cases, between the relentless pace of emergency medicine and the slow unraveling of a community&apos;s darkest secrets. With the precision of a diagnostician and the soul of a storyteller, John Bolla&apos;s debut novel asks: how much can one person carry before the weight becomes a breaking point?
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Book Details */}
      <section className="bg-background grain-overlay py-16 border-y border-gold/10">
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              {[
                { label: "Title", value: "A Space on the Wall" },
                { label: "Author", value: "John Bolla" },
                { label: "Publisher", value: "Parker Publishers" },
                { label: "Year", value: "2026" },
                { label: "Genre", value: "Thriller / Medical Fiction" },
              ].map((d) => (
                <div key={d.label}>
                  <p className="font-nav text-xs tracking-widest uppercase text-muted-foreground mb-1">{d.label}</p>
                  <p className="font-display text-sm text-foreground">{d.value}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Excerpt */}
      <section className="bg-background grain-overlay py-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-foreground text-center mb-4">Read an Excerpt</h2>
            <p className="font-nav text-sm tracking-widest uppercase text-muted-foreground text-center mb-12">Chapter One</p>
            <ExcerptDisplay paragraphs={excerptParagraphs} />
            <div className="text-center mt-8">
              <span className="font-nav text-sm tracking-widest uppercase text-gold gold-glow-hover cursor-pointer">
                Continue Reading →
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Buy the Book */}
      <section className="bg-surface grain-overlay border-y border-gold/10 py-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-foreground text-center mb-12">Buy the Book</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {retailers.map((r) => (
                <a
                  key={r.name}
                  href={r.href}
                  className="block bg-card border border-border rounded-sm p-6 text-center hover:border-gold/40 hover:shadow-[0_0_20px_rgba(200,146,42,0.1)] transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="font-nav text-sm tracking-widest uppercase text-foreground">{r.name}</p>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Full Cover */}
      <section className="bg-background grain-overlay py-24">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-foreground text-center mb-12">Full Cover</h2>
            <img
              src={bookCoverFull}
              alt="A Space on the Wall — full book cover spread"
              className="w-full rounded-sm shadow-[0_15px_60px_rgba(0,0,0,0.5)]"
              loading="lazy"
              width={1920}
              height={1200}
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
