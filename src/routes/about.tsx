import { createFileRoute } from "@tanstack/react-router";
import { AnimatedSection } from "../components/AnimatedSection";
import { GoldDivider } from "../components/GoldDivider";
import authorPhoto from "../assets/author-photo.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About John Bolla — Physician, Author" },
      { name: "description", content: "Learn about John Bolla, emergency physician and debut novelist from Montreal, now writing from coastal Florida." },
      { property: "og:title", content: "About John Bolla" },
      { property: "og:description", content: "Physician. Storyteller. Debut novelist." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "1960s", title: "Born in Montreal", desc: "Raised in the vibrant culture of Quebec" },
  { year: "1990s", title: "McGill University — Medical Degree", desc: "Graduated from his alma mater after pivoting from veterinary ambitions" },
  { year: "2000s", title: "Emergency & Family Medicine", desc: "Practiced across Canada and the United States" },
  { year: "2010s", title: "Relocated to Coastal Florida", desc: "Where sun, surf, and sand provide the perfect backdrop for writing" },
  { year: "2026", title: "A Space on the Wall", desc: "Debut novel published by Parker Publishers" },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface grain-overlay py-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">About the Author</h1>
            <GoldDivider className="!w-32 mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-background grain-overlay py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={authorPhoto}
                    alt="John Bolla"
                    className="w-72 md:w-96 rounded-sm border border-gold/20"
                    loading="lazy"
                    width={800}
                    height={1000}
                  />
                  <div className="absolute inset-0 rounded-sm shadow-[inset_0_0_80px_rgba(0,0,0,0.7)]" />
                </div>
              </div>
              <div>
                <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
                  John Bolla was born and raised in Montreal. His life ambition had been to become a veterinarian, but after three failed attempts, he earned a medical degree from his alma mater, McGill University. With license in hand, he set out and has practiced both emergency and family medicine in Canada and the United States.
                </p>
                <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
                  He currently resides in a coastal community in Florida, where the sun, surf, and sand provide the perfect backdrop for writing.
                </p>
                <p className="font-body text-foreground text-lg leading-relaxed italic">
                  <em>A Space on the Wall</em> is his first novel.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Dedication */}
      <section className="bg-surface grain-overlay border-y border-gold/10 py-24">
        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <AnimatedSection>
            <div className="border border-gold/20 rounded-sm bg-card p-8 md:p-12 text-center">
              <p className="font-display italic text-foreground text-xl md:text-2xl leading-relaxed mb-6">
                &ldquo;To my father, Ray, for his never-ending support and for having pushed me into medical school, where I did not want to go...&rdquo;
              </p>
              <p className="font-nav text-muted-foreground text-sm tracking-widest uppercase">
                — From the dedication of A Space on the Wall
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background grain-overlay py-24">
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-foreground text-center mb-12">The Journey</h2>
          </AnimatedSection>
          <div className="relative border-l border-gold/30 ml-4 md:ml-0 md:mx-auto">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.1}>
                <div className="relative pl-8 pb-12 last:pb-0">
                  <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-gold" />
                  <span className="font-nav text-gold text-sm tracking-widest uppercase">{m.year}</span>
                  <h3 className="font-display text-xl text-foreground mt-1">{m.title}</h3>
                  <p className="font-body text-muted-foreground mt-1">{m.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
