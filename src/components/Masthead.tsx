"use client";

import { useEffect, useState } from "react";

/* The bar sits flat on the paper at the top of the page and only grows a
 * ground of its own once the page has moved under it, so the opening
 * screen reads as one uninterrupted sheet. Two thresholds, not one: it
 * takes 48px to settle and a climb back above 24px to lift again, so a
 * bar resting on the threshold cannot flutter. */
export default function Masthead() {
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;
      setSettled((was) => window.scrollY > (was ? 24 : 48));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };

    read(); // the page may already be scrolled on load
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="masthead" data-settled={settled ? "true" : "false"}>
      <div className="shell masthead__inner">
        <a className="wordmark" href="#top">
          <span className="wordmark__mark" aria-hidden="true">
            <svg viewBox="0 0 64 64" fill="none">
              <rect width="64" height="64" rx="14" fill="currentColor" />
              {/* One leaf, cut out of the square, with the vein struck
                  back through it in the tile colour — so the mark stays
                  two colours and no thinner than a hairline at any size. */}
              <path
                d="M21.7 11.6 H40.75 V39 C40.75 46.3 34 52.4 26.55 54.47 C28.1 52.2 25.8 48.1 24.17 45.39 C22.37 42.39 22.09 40.45 21.7 37.45 Z"
                fill="var(--color-paper-raised)"
              />
              <path
                d="M31.2 17 C31.2 27.5 31.15 38.5 27.9 51.2"
                stroke="currentColor"
                strokeWidth="0.78"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span>learnmints</span>
        </a>

        <nav className="nav" aria-label="Primary">
          <a href="#fees">How fees work</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">Questions</a>
        </nav>

        <div className="masthead__end">
          <a className="masthead__login" href="#top">
            Log in
          </a>
          <a className="btn btn--primary" href="#pricing">
            Start free trial
          </a>
        </div>
      </div>
    </header>
  );
}
