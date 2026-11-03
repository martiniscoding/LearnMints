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

/* The six questions every tutor asks before moving, answered in the one
 * shape that answers them: ours beside theirs. */
const changes = [
  { ours: "No cut of your tuition", theirs: "5\u201310% of every fee" },
  { ours: "Paid the same working day", theirs: "Money held for 3\u20137 days" },
  { ours: "Nothing for students to install", theirs: "Starts with an app store download" },
  { ours: "One price, any batch size", theirs: "Billed per student" },
  { ours: "Every feature on every plan", theirs: "Features locked behind tiers" },
  { ours: "Export your data any time", theirs: "Hard to leave with your students" },
];

/* Where a tutor's week leaks away. `mins` draws the bar; the longest
 * item sets the full width, so the row lengths read against each other
 * rather than against an invented scale. */
const week = [
  { task: "Chasing parents for last month's fees", mins: 120 },
  { task: "Typing a test paper on Sunday night", mins: 120 },
  { task: "Re-sending notes lost in the group chat", mins: 60 },
  { task: "Checking the register for who has paid", mins: 40 },
  { task: "Explaining the meeting link again", mins: 30 },
];

const weekPeak = Math.max(...week.map((w) => w.mins));
const weekTotal = week.reduce((sum, w) => sum + w.mins, 0);

const spell = (mins: number) => {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (!h) return `${m} min`;
  const hrs = `${h} ${h === 1 ? "hr" : "hrs"}`;
  return m ? `${hrs} ${m} min` : hrs;
};

/* The everyday parts, one mint tile each. Icons are inline so the grid
 * costs nothing beyond the markup it already needs. */
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const included = [
  {
    title: "Course builder",
    body: "Modules, chapters, videos, PDFs and audio, in the order you teach them.",
    icon: (
      <>
        <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" {...stroke} />
        <path d="m3 12.5 9 4.5 9-4.5" {...stroke} />
        <path d="m3 17 9 4.5 9-4.5" {...stroke} />
      </>
    ),
  },
  {
    title: "Live classes in the browser",
    body: "Teach on your own course page. Attendance is marked for you.",
    icon: (
      <>
        <rect x="2.5" y="6" width="13" height="12" rx="2.5" {...stroke} />
        <path d="m15.5 11 6-3.5v9l-6-3.5" {...stroke} />
      </>
    ),
  },
  {
    title: "Student dashboard",
    body: "Each student sees what\u2019s done, what\u2019s due next and what they\u2019ve paid.",
    icon: (
      <>
        <rect x="3" y="3" width="7.5" height="7.5" rx="2" {...stroke} />
        <rect x="13.5" y="3" width="7.5" height="7.5" rx="2" {...stroke} />
        <rect x="3" y="13.5" width="7.5" height="7.5" rx="2" {...stroke} />
        <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" {...stroke} />
      </>
    ),
  },
  {
    title: "UPI and card payments",
    body: "Collect a term fee, one chapter or a full course. A receipt goes out instantly.",
    icon: (
      <>
        <rect x="6" y="2.5" width="12" height="19" rx="3" {...stroke} />
        <path d="M10.5 18.5h3" {...stroke} />
      </>
    ),
  },
  {
    title: "Login with a phone number",
    body: "Students sign in with a WhatsApp code. No email to remember or reset.",
    icon: (
      <path
        d="M21 11.5a8.5 8.5 0 0 1-12.2 7.7L3 21l1.8-5.8A8.5 8.5 0 1 1 21 11.5Z"
        {...stroke}
      />
    ),
  },
  {
    title: "Yours to take away",
    body: "Export courses, files and your student list whenever you like.",
    icon: (
      <>
        <path d="M12 3v11" {...stroke} />
        <path d="m7.5 10 4.5 4.5L16.5 10" {...stroke} />
        <path d="M4 18.5h16" {...stroke} />
      </>
    ),
  },
];

const priceIncludes = [
  "Unlimited students and courses",
  "Zero commission on fees",
  "Same-day settlement",
  "Instant fee receipts",
  "AI quizzes from your PDFs",
  "Watermarked notes and videos",
  "Live classes with attendance",
  "Full data export",
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
          {/* The rule the opening screen is built on: the argument to the
              left of it, the proof to the right. It runs up past the bar
              so the whole first screen reads as one sheet. */}
          <span className="hero-field__rule" aria-hidden="true" />
          <Hero />
        </section>

        {/* ---------------------------------------------------------- */}
        <section className="shell band" id="week">
          <div className="compare-head">
            <h2 className="h2">What changes when you move to LearnMints</h2>
            <p className="lede">
              The same six things every tutor asks about, side by side.
            </p>
          </div>

          <table className="compare">
            <thead>
              <tr>
                <th scope="col">On LearnMints</th>
                <th scope="col">On most tutor platforms</th>
              </tr>
            </thead>
            <tbody>
              {changes.map((c) => (
                <tr key={c.ours}>
                  <td>
                    <span className="compare__yes">
                      <Check />
                    </span>
                    {c.ours}
                  </td>
                  <td>
                    <span className="compare__no" aria-hidden="true" />
                    {c.theirs}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ---------------------------------------------------------- */}
        <section className="shell band" id="fees">
          <div className="fees">
            <div>
              <h2 className="h2">Every platform wants a percentage. We want a flat ₹24,000.</h2>
              <p className="lede" style={{ marginTop: "0.9rem" }}>
                A commission looks small on a brochure and large on a bank
                statement, because it grows exactly as fast as you do. Move the
                slider to your own numbers and see the difference on your year.
              </p>
            </div>
            <FeeCalculator />
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        <section className="shell band" id="admin">
          <div className="hours">
            <div className="hours__intro">
              <h2 className="h2">Six hours of every week go to admin, not teaching</h2>
              <p className="lede">
                Teaching on your own means also being the accountant, the
                registrar and the IT desk. This is where a typical week goes.
              </p>
              <p className="lede">
                LearnMints keeps the register, the receipts and the notes behind
                the one link your batch already opens, so you get that time back.
              </p>
            </div>

            <div className="hours__card">
              <ul className="hours__list">
                {week.map((w) => (
                  <li key={w.task}>
                    <p>{w.task}</p>
                    <span>{spell(w.mins)}</span>
                    <i
                      aria-hidden="true"
                      style={
                        {
                          "--fill": `${(w.mins / weekPeak) * 100}%`,
                        } as CSSProperties
                      }
                    />
                  </li>
                ))}
              </ul>

              <p className="hours__total">
                <span>Every week</span>
                <b>{spell(weekTotal)}</b>
              </p>
            </div>
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
          <div className="included-head">
            <h2 className="h2" id="included-head">
              And the everyday
              <br />
              parts, done properly
            </h2>
            <p>None of these cost extra and none are saved for a higher plan.</p>
          </div>
          <div className="included">
            {included.map((i) => (
              <div key={i.title}>
                <span className="included__icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    {i.icon}
                  </svg>
                </span>
                <h3 className="h3">{i.title}</h3>
                <p>{i.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        <section className="band pricing" id="pricing">
          <div className="shell">
            <div className="pricing__head">
              <h2 className="pricing__title">Pay for the term you teach</h2>
              <p className="pricing__lede">
                Every plan is the full product. A longer term only lowers the
                monthly rate. We never take a percentage of your fees.
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
                    <div className="plan__top">
                      <h3 className="plan__term">{plan.term}</h3>
                      {plan.featured && (
                        <span className="plan__flag">Best value</span>
                      )}
                    </div>

                    <p className="plan__tag">
                      ₹{plan.priceInr.toLocaleString("en-IN")}
                    </p>

                    <p className="plan__rate">
                      ₹{perMonth.toLocaleString("en-IN")} a month, paid upfront
                    </p>

                    {saving > 0 && (
                      <p className="plan__save">
                        Save ₹{saving.toLocaleString("en-IN")}
                      </p>
                    )}

                    <a
                      className={`btn ${plan.featured ? "btn--primary" : "btn--ghost"}`}
                      href="#top"
                    >
                      Start free trial
                    </a>
                  </article>
                );
              })}
            </div>

            <ul className="price__list">
              {priceIncludes.map((p) => (
                <li key={p}>
                  <Check />
                  {p}
                </li>
              ))}
            </ul>

            <p className="plans__note">
              14 days free, no card. The first 500 tutors keep these prices for
              as long as they stay.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        <section className="shell band" id="faq">
          <div className="faq">
            <div className="faq__head">
              <h2 className="h2">Questions teachers ask us first</h2>
              <p className="faq__ask">
                Still unsure? Write to{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a> and a person
                will reply.
              </p>
            </div>

            <div className="faq__list">
              {faqs.map((f, i) => (
                <details key={f.q} name="faq" open={i === 0}>
                  <summary>
                    <span>{f.q}</span>
                  </summary>
                  <p className="faq__a">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        <section className="shell band" aria-labelledby="closer-head">
          <div className="closer">
            <div>
              <h2 className="h2" id="closer-head">
                Teach this week. <span>Get paid the same day.</span>
              </h2>
              <p>
                Bring one batch across first and see how it feels. Setting up a
                course takes about 20 minutes.
              </p>
            </div>
            <a className="closer__cta" href="#top">
              Start your 14-day free trial
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
