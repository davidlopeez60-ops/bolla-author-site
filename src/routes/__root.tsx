import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "John Bolla — Author of A Space on the Wall" },
      { name: "description", content: "Official website of John Bolla, physician and debut novelist. Author of A Space on the Wall, a thriller published by Parker Publishers." },
      { property: "og:title", content: "John Bolla — Author of A Space on the Wall" },
      { property: "og:description", content: "Official website of John Bolla, physician and debut novelist. Author of A Space on the Wall, a thriller published by Parker Publishers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "John Bolla — Author of A Space on the Wall" },
      { name: "twitter:description", content: "Official website of John Bolla, physician and debut novelist. Author of A Space on the Wall, a thriller published by Parker Publishers." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Dancing+Script:wght@400..700&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold font-display text-gold">404</h1>
        <p className="mt-4 text-muted-foreground font-body">The page you&apos;re looking for doesn&apos;t exist.</p>
        <a href="/" className="mt-6 inline-block font-nav text-sm tracking-widest uppercase text-gold hover:text-gold-bright transition-colors">Go Home</a>
      </div>
    </div>
  );
}

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
