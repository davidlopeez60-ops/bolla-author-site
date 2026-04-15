import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatedSection } from "../components/AnimatedSection";
import { PullQuote } from "../components/PullQuote";
import { GoldDivider } from "../components/GoldDivider";
import bookCover from "../assets/book-cover.jpg";
import authorPhoto from "../assets/author-photo.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO — Dark, full-viewport */}
      <section className="relative min-h-screen flex items-center justify-center grain-overlay overflow-hidden">
        <img
          src={bookCover}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          width={800}
          height={1200}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center px-6">
          <p className="font-handwriting text-gold text-xl md:text-2xl mb-6 tracking-wide">A debut novel</p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground leading-[0.95] tracking-wide">
            JOHN BOLLA
          </h1>
          <div className="gold-divider !w-24 mx-auto my-8" />
          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            A physician. A detective. A woman who vanished.<br />And the one clue that changes everything.
          </p>
        </div>
      </section>

      {/* THE BOOK — Light section */}
      <section className="light-section">
        <div className="grid md:grid-cols-2 min-h-[80vh]">
          <div className="relative flex items-center justify-center bg-surface py-16 px-8">
            <img
              src={bookCover}
              alt="A Space on the Wall book cover"
              className="book-tilt w-64 md:w-80"
              width={800}
              height={1200}
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16">
            <div className="max-w-lg">
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">A Space on<br />the Wall</h2>
              <p className="font-handwriting text-gold text-xl mb-6">by John Bolla</p>
              <GoldDivider className="!my-6 !w-20" />
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
                Alec Barnes is a physician with a marathon obsession and a family legacy he can&apos;t outrun. When a child disappears from a quiet suburban street in the span of a heartbeat, he&apos;s the only witness — and the only one who knows what he saw. A taut, compassionate thriller that moves between hospital corridors and cold cases.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gold text-gold-foreground font-nav text-sm tracking-widest uppercase rounded-sm hover:bg-gold-bright transition-colors"
                >
                  Order the Book
                </Link>
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gold/50 text-gold font-nav text-sm tracking-widest uppercase rounded-sm hover:bg-gold/10 transition-colors"
                >
                  Read an Excerpt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE STRIP — Dark */}
      <section className="bg-surface grain-overlay border-y border-gold/10">
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
          <AnimatedSection>
            <PullQuote
              quote="He'd blow it up to whatever size current technology would allow, frame it, and hang it on the wall in the clubhouse next to his father's."
              attribution="— A Space on the Wall, Chapter 1"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ABOUT THE AUTHOR — Light warm section */}
      <section className="light-section-warm">
        <div className="grid md:grid-cols-2 min-h-[70vh]">
          <div className="relative overflow-hidden">
            <img
              src={authorPhoto}
              alt="John Bolla, author"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width={800}
              height={1000}
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16">
            <div className="max-w-lg">
              <AnimatedSection>
                <h2 className="font-display text-4xl text-foreground mb-6">About the Author</h2>
                <GoldDivider className="!my-4 !w-20" />
                <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
                  John Bolla was born and raised in Montreal. After three failed attempts at veterinary school, he earned his medical degree from McGill University and has practiced emergency and family medicine across Canada and the United States. He now lives in a coastal community in Florida. <em>A Space on the Wall</em> is his first novel.
                </p>
                <Link
                  to="/about"
                  className="font-nav text-sm tracking-widest uppercase text-gold gold-glow-hover"
                >
                  Read Full Bio →
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ TEASER — Dark */}
      <section className="bg-surface grain-overlay border-y border-gold/10">
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl text-foreground mb-4">Frequently Asked</h2>
            <GoldDivider className="!w-20 mx-auto !mb-12" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Where can I buy the book?",
                "Is John Bolla available for speaking engagements?",
                "Will there be a sequel?",
              ].map((q) => (
                <Link
                  key={q}
                  to="/faq"
                  className="group block bg-card border border-border rounded-sm p-6 hover:border-gold/40 transition-colors text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-body text-foreground">{q}</p>
                    <span className="text-gold text-xl font-display shrink-0">+</span>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* NEWSLETTER — Light section */}
      <section className="light-section">
        <div className="grid md:grid-cols-2 min-h-[50vh]">
          <div className="relative flex items-center justify-center py-16 px-8 bg-surface">
            <div className="text-center">
              <span className="font-display text-6xl md:text-7xl text-light-foreground/15 leading-none block">Stay in</span>
              <span className="font-display text-6xl md:text-7xl text-light-foreground/15 leading-none block">the Story</span>
            </div>
          </div>
          <div className="flex items-center px-8 md:px-16 py-16">
            <div className="max-w-md">
              <AnimatedSection>
                <h2 className="font-display text-3xl text-foreground mb-4">Stay in the Story</h2>
                <GoldDivider className="!my-4 !w-20" />
                <p className="font-body text-muted-foreground mb-8">
                  Get updates on new releases, events, and exclusive excerpts.
                </p>
                <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="bg-input border border-border rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-gold/60 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gold text-gold-foreground font-nav text-sm tracking-widest uppercase rounded-sm hover:bg-gold-bright transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
