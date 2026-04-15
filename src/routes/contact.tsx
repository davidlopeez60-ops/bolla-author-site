import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatedSection } from "../components/AnimatedSection";
import { GoldDivider } from "../components/GoldDivider";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact John Bolla" },
      { name: "description", content: "Get in touch with John Bolla for speaking engagements, press inquiries, book club visits, and more." },
      { property: "og:title", content: "Contact John Bolla" },
      { property: "og:description", content: "Reach out for speaking engagements, press, and book club requests." },
    ],
  }),
  component: ContactPage,
});

const subjects = ["General Inquiry", "Speaking Engagement", "Press & Media", "Book Club Request", "Other"];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:johnbolla@cfl.rr.com?subject=${encodeURIComponent(form.subject || "Website Inquiry")}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
  };

  return (
    <>
      {/* Hero — Dark */}
      <section className="bg-surface grain-overlay py-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <h1 className="font-display text-5xl text-foreground mb-4">Get in Touch</h1>
            <GoldDivider className="!w-32 mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      {/* Form — Light */}
      <section className="light-section py-24">
        <div className="mx-auto max-w-xl px-6">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-white border border-light-border rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-gold/60 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-white border border-light-border rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-gold/60 transition-colors"
              />
              <select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="bg-white border border-light-border rounded-sm px-4 py-3 text-foreground font-body focus:outline-none focus:border-gold/60 transition-colors"
              >
                <option value="">Select a subject</option>
                {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <textarea
                placeholder="Your message"
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-white border border-light-border rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-gold/60 transition-colors resize-none"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gold text-gold-foreground font-nav text-sm tracking-widest uppercase rounded-sm hover:bg-gold-bright transition-colors"
              >
                Send Message
              </button>
            </form>

            <div className="mt-12 text-center">
              <GoldDivider className="!w-24 mx-auto !mb-6" />
              <p className="font-nav text-sm tracking-wider text-muted-foreground">Publisher: Parker Publishers</p>
              <p className="font-body text-muted-foreground mt-2">johnbolla@cfl.rr.com</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
