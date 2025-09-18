import React, { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [dark, setDark] = useState(() =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--bg",
      dark ? "#0f1724" : "#f8fafc"
    );
    document.documentElement.style.setProperty(
      "--fg",
      dark ? "#e6eef8" : "#071327"
    );
    document.documentElement.style.setProperty(
      "--accent",
      dark ? "#7c3aed" : "#6d28d9"
    );
  }, [dark]);

  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 className="hero-title">
            Shastra — ship polished products, fast.
          </h1>
          <p className="hero-sub">
            Build, preview and present projects with a pro developer workflow —
            demos, video snippets and a shareable portfolio in minutes.
          </p>

          <div className="hero-ctas">
            <a className="btn primary" href="/demo">Live demo</a>
            <a className="btn ghost" href="https://github.com/joecyriac1/shastra-frontend" target="_blank" rel="noreferrer">Code</a>

            <button
              aria-pressed={dark}
              className="theme-toggle"
              onClick={() => setDark((s) => !s)}
              title="Toggle theme"
            >
              {dark ? "🌙" : "☀️"}
            </button>
          </div>

          <ul className="hero-features">
            <li>Interactive previews</li>
            <li>Shareable one-click demos</li>
            <li>Developer-friendly</li>
          </ul>
        </div>

        <div className="hero-media" aria-hidden>
          {/* Replace src with a short looping MP4/GIF of the UI — small file under 1MB */}
          <video
            className="demo-video"
            autoPlay
            loop
            muted
            playsInline
            src="/public/demo-loop.mp4"
          />
          <div className="gradient-blob" />
        </div>
      </div>
    </header>
  );
}
