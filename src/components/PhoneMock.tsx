/* The hero's one picture: a teacher's own phone on an ordinary evening,
 * with the three things LearnMints is for on the same screen — the money
 * that arrived, the class about to start, and who still owes. Every
 * figure here is illustrative, so it is kept modest and internally
 * consistent: four students at ₹2,500 against ₹12,500 collected. */
const fees = [
  { initials: "AS", name: "Aarav Sharma", state: "due", label: "Due today" },
  { initials: "PK", name: "Priya Kapoor", state: "paid", label: "Paid" },
  { initials: "RM", name: "Rohit Mehta", state: "late", label: "5 days late" },
  { initials: "SN", name: "Sana Naqvi", state: "paid", label: "Paid" },
] as const;

const tabs = [
  { label: "Today", icon: "home" },
  { label: "Batches", icon: "batches" },
  { label: "Fees", icon: "fees" },
  { label: "Content", icon: "content" },
] as const;

/* Status glyphs. Drawn at 24 and set in em, so they track the label. */
const glyphs = {
  due: "M12 7.4V12l3 1.8",
  paid: "m5.5 12.4 4.2 4.2 8.8-9.2",
  late: "M12 7.6v5.2M12 16.4h.01",
} as const;

const StateIcon = ({ state }: { state: keyof typeof glyphs }) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    {state !== "paid" && (
      <circle cx="12" cy="12" r="8.6" stroke="currentColor" strokeWidth="1.7" />
    )}
    <path
      d={glyphs[state]}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TabIcon = ({ icon }: { icon: (typeof tabs)[number]["icon"] }) => {
  if (icon === "fees") return <b className="phone__rupee">₹</b>;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon === "home" && <path d="M3.8 10.4 12 4l8.2 6.4v8.3a1.3 1.3 0 0 1-1.3 1.3h-4v-5.4h-5.8V20h-4a1.3 1.3 0 0 1-1.3-1.3Z" />}
      {icon === "batches" && (
        <>
          <circle cx="9.4" cy="9" r="3" />
          <path d="M3.8 19.2c.5-3 2.8-4.6 5.6-4.6s5.1 1.6 5.6 4.6" />
          <path d="M16.2 7.4a2.8 2.8 0 0 1 0 5.4M17.6 19.2c-.2-1.6-.7-2.9-1.5-3.8 2.4.1 4 1.6 4.4 3.8" />
        </>
      )}
      {icon === "content" && (
        <>
          <path d="M12 7.2C10.6 6 8.8 5.4 6.4 5.4H3.6v12.4h3.2c2 0 3.7.5 5.2 1.6 1.5-1.1 3.2-1.6 5.2-1.6h3.2V5.4h-2.8c-2.4 0-4.2.6-5.6 1.8Z" />
          <path d="M12 7.2v12.2" />
        </>
      )}
    </svg>
  );
};

export default function PhoneMock() {
  return (
    <div className="stage">
      {/* The pale slab the phone is set against, nudged out to the right
          so the device reads as lifted off it rather than framed by it. */}
      <span className="stage__slab" aria-hidden="true" />

      <div
        className="phone"
        role="img"
        aria-label="The LearnMints app on a tutor's phone: ₹12,500 collected today and settled to UPI, a live class on refraction at 6 pm, and this month's fees showing two students paid, one due today and one five days late."
      >
        <div className="phone__screen" aria-hidden="true">
          <div className="phone__status">
            <span>9:41</span>
            <span className="phone__signal">
              4G
              <svg viewBox="0 0 18 12" fill="currentColor">
                <rect x="0" y="8" width="2.6" height="4" rx="0.8" />
                <rect x="4.2" y="5.6" width="2.6" height="6.4" rx="0.8" />
                <rect x="8.4" y="3.2" width="2.6" height="8.8" rx="0.8" />
                <rect x="12.6" y="0" width="2.6" height="12" rx="0.8" />
              </svg>
            </span>
          </div>

          <div className="phone__body">
            <p className="phone__greet">Good evening, Meera</p>
            <p className="phone__batch">Class 10 Science, 38 students</p>

            <div className="phone__collected">
              <span>Collected today</span>
              <b>₹12,500</b>
              <small>Settled to your UPI at 2:14 pm</small>
            </div>

            <div className="phone__class">
              <div>
                <b>Light: refraction</b>
                <span>Live class at 6:00 pm</span>
              </div>
              <span className="phone__start">Start</span>
            </div>

            <p className="phone__feehead">
              <b>Fees this month</b>
              <span>See all</span>
            </p>

            <ul className="phone__fees">
              {fees.map((f) => (
                <li key={f.initials}>
                  <span className="phone__avatar">{f.initials}</span>
                  <span className="phone__who">
                    <b>{f.name}</b>
                    <small>₹2,500</small>
                  </span>
                  <span className="phone__state" data-state={f.state}>
                    <StateIcon state={f.state} />
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <nav className="phone__tabs">
            {tabs.map((t, i) => (
              <span key={t.label} data-active={i === 0 ? "true" : "false"}>
                <TabIcon icon={t.icon} />
                {t.label}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* The receipt lands while the page is being read, so it hangs off
          the device rather than sitting inside it. */}
      <div className="receipt" aria-hidden="true">
        <span className="receipt__mark">₹</span>
        <div>
          <b>₹2,500 from Priya&rsquo;s parent</b>
          <p>
            Receipt sent on WhatsApp.
            <br />
            In your bank today.
          </p>
        </div>
      </div>
    </div>
  );
}
