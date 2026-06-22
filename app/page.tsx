import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "DesiBees is taking shape",
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    url: siteConfig.url,
    title: "DesiBees is taking shape",
    description: siteConfig.description,
  },
  twitter: {
    title: "DesiBees is taking shape",
    description: siteConfig.description,
  },
};

const HiveMark = () => (
  <svg aria-hidden="true" viewBox="0 0 38 38" fill="none">
    <path d="m11.1 5.9 5.18 3v5.98l-5.18 3-5.18-3V8.9l5.18-3Zm15.8 0 5.18 3v5.98l-5.18 3-5.18-3V8.9l5.18-3ZM19 15.05l5.18 3v5.98l-5.18 3-5.18-3v-5.98l5.18-3Zm-7.9 9.18 5.18 3v5.98l-5.18 3-5.18-3v-5.98l5.18-3Zm15.8 0 5.18 3v5.98l-5.18 3-5.18-3v-5.98l5.18-3Z" fill="currentColor" />
  </svg>
);

export default function Home() {
  const shareUrl = encodeURIComponent(siteConfig.url);
  const shareText = encodeURIComponent(
    "DesiBees is taking shape — follow along for the launch.",
  );
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
        <Link className="brand" href="/" aria-label="DesiBees home">
          <span className="brand-mark"><HiveMark /></span>
          <span>DesiBees</span>
        </Link>
        <nav className="site-nav" aria-label="Page navigation">
          <a href="#about">About</a>
          <a href="#launch">Launch</a>
          <a href="#share">Share</a>
        </nav>
      </header>

      <section className="message" id="about">
        <p className="kicker"><i /> Coming soon</p>
        <h1>
          DesiBees is<br />
          <span>taking shape.</span>
        </h1>
        <p className="copy">
          DesiBees is a new independent digital project taking shape with care,
          curiosity, and a distinctly original point of view.
        </p>
        <p className="copy copy-secondary" id="launch">
          We are thoughtfully building the first version now, refining the
          details before opening the doors to everyone. This page will become
          the home of DesiBees when the project is ready to launch.
        </p>
        <p className="copy copy-secondary">
          Stay curious and visit again soon; something good is in progress, and
          we look forward to sharing the full story with you.
        </p>

        <div className="share" id="share" aria-label="Share DesiBees">
          <span>Share the buzz</span>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`https://x.com/intent/post?url=${shareUrl}&text=${shareText}`} target="_blank" rel="noopener noreferrer">X</a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} DesiBees</span>
        <span>Thoughtfully in progress</span>
      </footer>
    </main>
  );
}
