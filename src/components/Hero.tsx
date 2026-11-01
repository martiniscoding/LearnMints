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
          <a className="btn btn--primary" href="#pricing">
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
      </div>
    </div>
  );
}
