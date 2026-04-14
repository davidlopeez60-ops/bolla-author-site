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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center grain-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 z-[2]" />
        <img
          src={bookCover}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          width={800}
          height={1200}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <span className="font-handwriting text-gold text-xl mb-4 block">A debut novel</span>
            <h1 className="font-display text-5xl md:text-7xl text-foreground leading-[1.1] mb-4">
              A Space on<br />the Wall
            </h1>
            <p className="font-handwriting text-gold-bright text-2xl mb-6">by John Bolla</p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              A physician. A detective. A woman who vanished. And the one clue that changes everything.
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
          <div className="hidden md:flex justify-center">
            <img
              src={bookCover}
              alt="A Space on the Wall book cover"
              className="book-tilt w-80 rounded-sm"
              width={800}
              height={1200}
            />
          </div>
        </div>
      </section>

      {/* Quote Strip */}
      <section className="bg-surface grain-overlay border-y border-gold/10">
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-16">
          <AnimatedSection>
            <PullQuote
              quote="He'd blow it up to whatever size current technology would allow, frame it, and hang it on the wall in the clubhouse next to his father's."
              attribution="— A Space on the Wall, Chapter 1"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* About the Author Teaser */}
      <section className="bg-background grain-overlay">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-sm shadow-[inset_0_0_60px_rgba(0,0,0,0.8)]" />
                  <img
                    src={authorPhoto}
                    alt="John Bolla, author"
                    className="w-72 md:w-80 rounded-sm border border-gold/20"
                    loading="lazy"
                    width={800}
                    height={1000}
                  />
                </div>
              </div>
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">About the Author</h2>
                <GoldDivider className="!my-4 !w-24" />
                <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
                  John Bolla was born and raised in Montreal. After three failed attempts at veterinary school, he earned his medical degree from McGill University and has practiced emergency and family medicine across Canada and the United States. He now lives in a coastal community in Florida. <em>A Space on the Wall</em> is his first novel.
                </p>
                <Link
                  to="/about"
                  className="font-nav text-sm tracking-widest uppercase text-gold gold-glow-hover"
                >
                  Read Full Bio →
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Book Section */}
      <section className="bg-surface grain-overlay border-y border-gold/10">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">The Novel</h2>
                <GoldDivider className="!my-4 !w-24" />
                <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
                  Alec Barnes is a physician with a marathon obsession and a family legacy he can&apos;t outrun. When a child disappears from a quiet suburban street in the span of a heartbeat, he&apos;s the only witness — and the only one who knows what he saw. What follows is a taut, compassionate thriller that moves between hospital corridors and cold cases, between the relentless pace of emergency medicine and the slow unraveling of a community&apos;s darkest secrets.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/book"
                    className="inline-flex items-center justify-center px-8 py-3 bg-gold text-gold-foreground font-nav text-sm tracking-widest uppercase rounded-sm hover:bg-gold-bright transition-colors"
                  >
                    Buy Now
                  </Link>
                  <Link
                    to="/book"
                    className="inline-flex items-center justify-center px-8 py-3 border border-gold/50 text-gold font-nav text-sm tracking-widest uppercase rounded-sm hover:bg-gold/10 transition-colors"
                  >
                    Read Excerpt
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={bookCover}
                  alt="A Space on the Wall"
                  className="w-64 md:w-72 rounded-sm shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
                  loading="lazy"
                  width={800}
                  height={1200}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="bg-background grain-overlay">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-foreground text-center mb-12">Frequently Asked</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { q: "Where can I buy the book?", link: "/faq" },
                { q: "Is John Bolla available for speaking engagements?", link: "/faq" },
                { q: "Will there be a sequel?", link: "/faq" },
              ].map((item) => (
                <Link
                  key={item.q}
                  to={item.link}
                  className="group block bg-card border border-border rounded-sm p-6 hover:border-gold/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-body text-foreground">{item.q}</p>
                    <span className="text-gold text-xl font-display shrink-0">+</span>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-surface grain-overlay border-y border-gold/10">
        <div className="relative z-10 mx-auto max-w-2xl px-6 py-24 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-foreground mb-4">Stay in the Story</h2>
            <p className="font-body text-muted-foreground mb-8">
              Get updates on new releases, events, and exclusive excerpts.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-input border border-border rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-gold/60 transition-colors"
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
      </section>
    </>
  );
}
