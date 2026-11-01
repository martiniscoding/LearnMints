"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* The pane condenses once the page has moved under it, so the reading
 * area grows back as a visitor goes down the page. Two thresholds, not
 * one: it takes 48px to condense and a climb back above 24px to open
 * again, so a bar resting on the threshold cannot flutter. */
export default function Masthead() {
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;
      setCondensed((was) => window.scrollY > (was ? 24 : 48));
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
    <header className="masthead" data-condensed={condensed ? "true" : "false"}>
      <div className="shell">
        <div className="masthead__inner">
          <a className="wordmark" href="#top">
            <Image
              className="wordmark__mark"
              src="/logo-mark.png"
              alt=""
              width={56}
              height={56}
              loading="eager"
            />
            <span>
              Learn<i>Mints</i>
            </span>
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="#week">Why switch</a>
            <a href="#fees">Your fees</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">Questions</a>
          </nav>
          <a className="btn btn--primary" href="#pricing">
            Start free
          </a>
        </div>
      </div>
    </header>
  );
}
