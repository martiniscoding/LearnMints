/* The marquee's claims: each one what LearnMints does, paired with what a
 * teacher gets elsewhere. Kept short because they scroll, and kept to
 * claims this page can defend — no invented figures for anybody else's
 * product. */
const edge = [
  { ours: "No cut of your tuition", theirs: "others take a percentage of every fee" },
  { ours: "Paid the same working day", theirs: "others hold your money for a week" },
  { ours: "Nothing for students to install", theirs: "others start at the app store" },
  { ours: "One price, any batch size", theirs: "others bill you per student" },
  { ours: "Every feature on every plan", theirs: "others lock them behind a tier" },
  { ours: "Your data, exportable always", theirs: "others hold your batch to ransom" },
];

export default function Hero() {
  return (
    <div className="shell">
      <div className="hero">
        <p className="hero__kicker">
          <b>Early access</b>
          Open to the first 500 tutors in India
        </p>

        <h1 className="display">
          <span>
            Take your teaching <em>online</em>.
          </span>{" "}
          <span>Your students just tap a link.</span>
        </h1>

        <p className="lede">
          Your chapters, live classes, tests and fee collection sit on one page
          that opens on any phone. No app store, no email addresses, no meeting
          links to explain — and never a cut of your tuition.
        </p>

        <div className="hero__actions">
          <a className="btn btn--primary btn--glow" href="#pricing">
            Start teaching free for 14 days
          </a>
          <a className="btn btn--ghost" href="#fees">
            See how fees reach you
          </a>
        </div>

        <p className="hero__note">
          No card needed to start. <strong>₹7,000 for three months</strong> or{" "}
          <strong>₹24,000 a year</strong> after the trial, whether you teach ten
          students or five hundred.
        </p>

        <div
          className="versus"
          role="group"
          aria-label="How LearnMints compares with other platforms"
        >
          <p className="versus__claim">
            Better <em>and</em> cheaper than every alternative on the market
          </p>

          <div className="versus__marquee">
            {/* Three passes of the same list: the first is the one a
                screen reader reads, the other two only exist so the loop
                has something to roll into on a wide screen. */}
            <div className="versus__track">
              {[0, 1, 2].map((pass) => (
                <ul
                  className="versus__set"
                  key={pass}
                  aria-hidden={pass === 0 ? undefined : true}
                >
                  {edge.map((e) => (
                    <li key={e.ours}>
                      <b>{e.ours}</b>
                      <span>{e.theirs}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
