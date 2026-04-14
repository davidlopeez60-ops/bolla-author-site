import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatedSection } from "../components/AnimatedSection";
import { GoldDivider } from "../components/GoldDivider";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Support Independent Storytelling — John Bolla" },
      { name: "description", content: "Support John Bolla's writing and independent publishing efforts." },
      { property: "og:title", content: "Support Independent Storytelling" },
      { property: "og:description", content: "Help make stories like A Space on the Wall possible." },
    ],
  }),
  component: DonatePage,
});

const amounts = [5, 15, 25, 50];

function DonatePage() {
  const [selected, setSelected] = useState<number | null>(25);
  const [custom, setCustom] = useState("");

  return (
    <>
      <section className="bg-surface grain-overlay py-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h1 className="font-display text-5xl text-foreground mb-4">Support Independent Storytelling</h1>
            <GoldDivider className="!w-32 mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-background grain-overlay py-24">
        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <AnimatedSection>
            <p className="font-body text-muted-foreground text-lg leading-relaxed text-center mb-12">
              Writing is a solitary and often costly pursuit. If <em>A Space on the Wall</em> moved you, challenged you, or simply gave you a few hours of escape, consider supporting the work that makes stories like this possible.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => { setSelected(amt); setCustom(""); }}
                  className={`border rounded-sm p-4 text-center transition-all font-display text-xl ${
                    selected === amt
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-border bg-card text-foreground hover:border-gold/30"
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <input
                type="number"
                placeholder="Custom amount"
                value={custom}
                onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                className="w-full bg-input border border-border rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-gold/60 transition-colors"
              />
            </div>

            <button
              className="w-full px-8 py-4 bg-gold text-gold-foreground font-nav text-sm tracking-widest uppercase rounded-sm hover:bg-gold-bright transition-colors"
            >
              Donate {selected ? `$${selected}` : custom ? `$${custom}` : ""}
            </button>

            <p className="text-center text-muted-foreground text-sm mt-6 font-body">
              All donations support future writing projects and the costs of independent publishing.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
