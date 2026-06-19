import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Something good is taking shape",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

const HiveMark = () => (
  <svg aria-hidden="true" viewBox="0 0 38 38" fill="none">
    <path d="m11.1 5.9 5.18 3v5.98l-5.18 3-5.18-3V8.9l5.18-3Zm15.8 0 5.18 3v5.98l-5.18 3-5.18-3V8.9l5.18-3ZM19 15.05l5.18 3v5.98l-5.18 3-5.18-3v-5.98l5.18-3Zm-7.9 9.18 5.18 3v5.98l-5.18 3-5.18-3v-5.98l5.18-3Zm15.8 0 5.18 3v5.98l-5.18 3-5.18-3v-5.98l5.18-3Z" fill="currentColor" />
  </svg>
);

export default function Home() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    inLanguage: "en",
  };

  return (
    <main className="coming-soon">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="glow glow-left" />
      <div className="glow glow-right" />
      <div className="noise" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="DesiBees home">
          <span className="brand-mark"><HiveMark /></span>
          <span>DesiBees</span>
        </a>
      </header>

      <section className="message" id="top">
        <p className="kicker"><i /> Coming soon</p>
        <h1>
          Something good<br />
          <span>is taking shape.</span>
        </h1>
        <p className="copy">
          DesiBees is a new independent digital project in development.
          Stay curious—we&apos;ll be ready to share more soon.
        </p>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} DesiBees</span>
        <span>Thoughtfully in progress</span>
      </footer>
    </main>
  );
}
