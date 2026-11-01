import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Masthead from "@/components/Masthead";
import Hero from "@/components/Hero";
import FeeCalculator from "@/components/FeeCalculator";
import { site, faqs, plans, baseMonthlyInr } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

/* Lit squares of the hero check: [cell out from the centre, row down
   from the top, delay, duration]. Only cells whose two counts sum to an
   odd number carry the azure tint the glow sits on. */
const heroTiles = [
  [-3, 2, -0.4, 11],
  [2, 1, -5.8, 13],
  [-7, 4, -2.1, 12],
  [7, 2, -8.6, 15],
  [-5, 8, -3.3, 10],
  [5, 10, -11.2, 14],
  [-9, 6, -6.5, 13],
  [11, 6, -1.4, 16],
  [-8, 13, -9.1, 12],
  [8, 13, -4.2, 11],
  [-6, 11, -12.7, 15],
  [12, 15, -7.4, 13],
  [-10, 15, -2.8, 14],
  [-11, 10, -10.3, 12],
  [11, 12, -5.1, 16],
  [-1, 6, -13.5, 15],
  [1, 4, -8.2, 14],
  [10, 13, -0.9, 13],
];

const week = [
  { task: "Chasing four parents for last month's fees, politely, again", cost: "2 hrs" },
  { task: "Re-sending notes that have scrolled out of the group", cost: "1 hr" },
  { task: "Typing a test paper from scratch on Sunday night", cost: "2 hrs" },
  { task: "Checking a paper register for who has paid and who hasn't", cost: "40 min" },
  { task: "Explaining the meeting link to the same three students", cost: "30 min" },
];

const included = [
  {
    title: "Course builder",
    body: "Modules, chapters, videos, PDFs and audio, arranged in the order you actually teach them.",
  },
  {
    title: "Live classes in the browser",
    body: "Run the session on your own course page. Attendance is marked against each student for you.",
  },
  {
    title: "Student dashboard",
    body: "Every student sees what they have finished, what is due next, and what they have paid.",
  },
  {
    title: "UPI and card payments",
    body: "Collect a term fee, a single chapter or a full course on one page. Every payment gets a receipt on the spot.",
  },
  {
    title: "Login by phone number",
    body: "A phone number and a passcode they set once. No email address to remember, nothing to reset at 10 pm.",
  },
  {
    title: "Yours to take away",
    body: "Export your courses, files and student list whenever you like, including after you stop paying.",
  },
];

const priceIncludes = [
  "Unlimited students, courses and chapters",
  "Zero commission on every rupee you collect",
  "Same-day settlement to your bank or UPI",
  "Instant fee receipts and phone-number login",
  "AI quiz generation from your own PDFs",
  "Watermarked videos and notes",
  "Live classes with automatic attendance",
  "Full export of your data, any time",
];

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="m4 12.5 5 5L20 6.5"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Page() {
  return (
    <>
      <Masthead />

      <main id="top">
        {/* ---------------------------------------------------------- */}
        <section className="hero-field" aria-label="LearnMints in one view">
          <div className="hero-field__tiles" aria-hidden="true">
            {heroTiles.map(([c, r, delay, dur]) => (
              <i
                key={`${c}:${r}`}
                style={
                  {
                    "--c": c,
                    "--r": r,
                    "--delay": `${delay}s`,
                    "--dur": `${dur}s`,
                  } as CSSProperties
                }
              />
            ))}
          </div>
          <Hero />
        </section>

        {/* ---------------------------------------------------------- */}
        <section className="shell band" id="week">
          <div className="ledger">
            <div className="ledger__intro">
              <h2 className="h2">Six hours of every week go to admin, not teaching</h2>
              <p className="lede" style={{ marginTop: "1.1rem" }}>
                Teaching on your own means being the registrar, the accountant and
                the IT desk as well. Here is where a typical week actually goes.
              </p>
            </div>

            <ul className="ledger__list">
              {week.map((w) => (
                <li key={w.task}>
                  <p>{w.task}</p>
                  <span>{w.cost}</span>
                </li>
              ))}
            </ul>

            <div className="ledger__answer">
              <p>
                LearnMints is built to hand that day back to you — not by adding
                another dashboard to check, but by keeping the register, the
                receipts and the notes in the one place your batch already opens.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        <section className="shell band" id="fees">
          <div className="fees">
            <div>
              <h2 className="h2">Every platform wants a percentage. We want a flat ₹24,000.</h2>
              <p className="lede" style={{ marginTop: "1.1rem" }}>
                A commission looks small on a brochure and large on a bank
                statement, because it grows exactly as fast as you do. Move the
                slider to your own numbers and see the difference on your year.
              </p>
            </div>
            <FeeCalculator />
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        <section className="band band--ink" id="features">
          <div className="shell">
            <div className="section-head">
              <h2 className="h2">Two jobs we took off your desk entirely</h2>
              <p className="lede">
                Everything else on this page you could, with enough patience,
                assemble yourself from free tools. These two you could not.
              </p>
            </div>

            <div className="spread">
              <div>
                <span className="spread__tag">Set a test in the time it takes to upload one</span>
                <h3>Turn a chapter PDF into a quiz, before your tea goes cold</h3>
                <p>
                  Upload the chapter you just taught. LearnMints reads it and hands
                  back twenty questions with an answer key, which you edit and
                  publish. It handles the typing, not the teaching — you still
                  decide what is worth asking.
                </p>
              </div>
              <div className="spread__visual">
                <div className="quiz">
                  <p className="quiz__src">
                    <b>Chapter 7 — Light.pdf</b> read in 4 seconds
                  </p>
                  <p className="quiz__q">
                    3. A ray of light passes from air into glass. Which quantity
                    stays unchanged?
                  </p>
                  <ul className="quiz__opts">
                    <li>
                      <span className="quiz__key" />
                      Speed of the ray
                    </li>
                    <li>
                      <span className="quiz__key" />
                      Wavelength of the ray
                    </li>
                    <li data-correct>
                      <span className="quiz__key" />
                      Frequency of the ray
                    </li>
                    <li>
                      <span className="quiz__key" />
                      Direction of travel
                    </li>
                  </ul>
                  <p className="quiz__foot">Question 3 of 20 · answer key included</p>
                </div>
              </div>
            </div>

            <div className="spread spread--flip">
              <div>
                <span className="spread__tag">For everyone who has found their notes in a Telegram group</span>
                <h3>Your notes carry the name of whoever opened them</h3>
                <p>
                  Every video and PDF shows the viewing student&rsquo;s own phone
                  number, drifting slowly across the screen so it cannot be cropped
                  out. Nothing stops a determined leak, but a file that names the
                  leaker stops the casual ones — which is nearly all of them.
                </p>
              </div>
              <div className="spread__visual">
                <div className="wmark">
                  <span className="wmark__play" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5.5v13l11-6.5z" />
                    </svg>
                  </span>
                  <span className="wmark__stamp wmark__stamp--a" aria-hidden="true">
                    +91 98XXX 41207
                  </span>
                  <span className="wmark__stamp wmark__stamp--b" aria-hidden="true">
                    +91 98XXX 41207
                  </span>
                  <span className="wmark__caption">
                    Reflection at a plane surface · 14:02 · watermarked per viewer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        <section className="shell band" aria-labelledby="included-head">
          <div className="section-head">
            <h2 className="h2" id="included-head">
              And the ordinary things, done properly
            </h2>
            <p className="lede">
              The parts every platform claims. The difference is that none of them
              cost extra here, and none of them are held back for a higher tier.
            </p>
          </div>
          <div className="included">
            {included.map((i) => (
              <div key={i.title}>
                <h3 className="h3">{i.title}</h3>
                <p>{i.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        <section className="band band--ink" id="pricing">
          <div className="shell">
            <div className="section-head">
              <h2 className="h2">Pay for the term you teach.</h2>
              <p className="lede">
                Three lengths, one product. Every plan carries everything below
                — nothing is held back for a higher tier, and we never take a
                percentage of your tuition. A longer term only buys you a lower
                monthly rate.
              </p>
            </div>

            <div className="plans">
              {plans.map((plan) => {
                const perMonth = Math.round(plan.priceInr / plan.months);
                const saving = baseMonthlyInr * plan.months - plan.priceInr;

                return (
                  <article
                    className="plan"
                    key={plan.id}
                    data-featured={plan.featured ? "true" : "false"}
                  >
                    <h3 className="plan__term">{plan.term}</h3>
                    {plan.featured && (
                      <span className="plan__flag">Best value</span>
                    )}

                    <div className="plan__tag">
                      <span className="plan__rupee">₹</span>
                      <span className="plan__num">
                        {plan.priceInr.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <p className="plan__rate">
                      ₹{perMonth.toLocaleString("en-IN")} a month, paid once
                      upfront
                    </p>

                    <p className="plan__save">
                      {saving > 0
                        ? `Saves ₹${saving.toLocaleString("en-IN")} against paying every ${plans[0].months} months`
                        : "The shortest term — switch to a longer one whenever you like"}
                    </p>

                    <a
                      className={`btn ${plan.featured ? "btn--primary" : "btn--ghost"}`}
                      href="#top"
                    >
                      Start free for 14 days
                    </a>
                  </article>
                );
              })}
            </div>

            <div className="plans__foot">
              <p className="plans__note">
                Fourteen days free first, no card. The first 500 teachers keep
                these prices for as long as they stay with us.
              </p>
              <ul className="price__list">
                {priceIncludes.map((p) => (
                  <li key={p}>
                    <Check />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        <section className="shell band" id="faq">
          <div className="section-head">
            <h2 className="h2">Questions teachers ask us first</h2>
          </div>
          <div className="faq">
            {faqs.map((f, i) => (
              <details key={f.q} name="faq" open={i === 0}>
                <summary>
                  <span>{f.q}</span>
                </summary>
                <p className="faq__a">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        <section className="shell band band--tight">
          <div className="closer">
            <h2 className="h2">Teach this week. Get paid the same day.</h2>
            <p className="lede">
              Bring one batch across and see how it feels before you move the rest.
              Setting up a course takes about twenty minutes.
            </p>
            <div className="closer__actions">
              <a className="btn btn--primary btn--glow" href="#top">
                Start teaching free for 14 days
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell">
        <div className="foot">
          <p style={{ margin: 0 }}>
            {site.name} is built by {site.legalName}, in India, for teachers in
            India.
          </p>
          <nav aria-label="Footer">
            <a href="#pricing">Pricing</a>
            <a href="#faq">Questions</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
