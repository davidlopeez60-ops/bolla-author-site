import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatedSection } from "../components/AnimatedSection";
import { GoldDivider } from "../components/GoldDivider";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — John Bolla" },
      { name: "description", content: "Frequently asked questions about A Space on the Wall, John Bolla, and upcoming projects." },
      { property: "og:title", content: "FAQ — John Bolla" },
      { property: "og:description", content: "Common questions about the book and the author." },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    category: "About the Book",
    items: [
      {
        q: "What is A Space on the Wall about?",
        a: "It's a thriller that begins with a split-second moment of crisis and spirals into questions about memory, guilt, justice, and what we owe each other as human beings. It's also, at its heart, about family — and the lengths we'll go to belong.",
      },
      {
        q: "Is the medical content in the book accurate?",
        a: "As a physician with decades of experience in emergency medicine, I've drawn on real clinical knowledge. That said, this is a work of fiction — the drama has been turned up a few notches.",
      },
      {
        q: "Where can I buy the book?",
        a: "The book is available on Amazon, Barnes & Noble, and through Parker Publishers directly.",
      },
      {
        q: "Will there be a sequel?",
        a: "Let's just say Alec Barnes has unfinished business.",
      },
    ],
  },
  {
    category: "About the Author",
    items: [
      {
        q: "Is John Bolla available for speaking engagements or book club visits?",
        a: "Yes! John is available for in-person and virtual events. Please use the Contact page to get in touch.",
      },
      {
        q: "Where is John Bolla based?",
        a: "John lives in a coastal community in Florida.",
      },
      {
        q: "How long did it take to write this novel?",
        a: "Years in the thinking, and considerably less time on the page — though the editing process is another story entirely.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      className="w-full text-left bg-card border border-border rounded-sm p-6 hover:border-gold/30 transition-colors"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="font-body text-foreground text-lg">{q}</p>
        <span className="text-gold text-xl font-display shrink-0 transition-transform" style={{ transform: open ? "rotate(45deg)" : "none" }}>
          +
        </span>
      </div>
      {open && (
        <p className="mt-4 font-body text-muted-foreground leading-relaxed">{a}</p>
      )}
    </button>
  );
}

function FaqPage() {
  return (
    <>
      <section className="bg-surface grain-overlay py-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h1 className="font-display text-5xl text-foreground mb-4">Frequently Asked Questions</h1>
            <GoldDivider className="!w-32 mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-background grain-overlay py-24">
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          {faqs.map((cat) => (
            <AnimatedSection key={cat.category}>
              <div className="mb-12">
                <h2 className="font-display text-2xl text-foreground mb-6">{cat.category}</h2>
                <div className="flex flex-col gap-3">
                  {cat.items.map((item) => (
                    <FaqItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
