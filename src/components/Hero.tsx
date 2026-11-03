import PhoneMock from "@/components/PhoneMock";
import { site, yearlyPlan } from "@/lib/site";

/* Quoted from the plan rather than typed out, so the headline figure and
 * the pricing table can never drift apart. */
const monthlyOnYearly = Math.round(yearlyPlan.priceInr / yearlyPlan.months);

export default function Hero() {
  return (
    <div className="shell hero">
      <div className="hero__copy">
        <p className="hero__kicker">
          <span className="hero__dot" aria-hidden="true" />
          Open to the first 500 tutors in India
        </p>

        <h1 className="display">{site.tagline}</h1>

        <p className="lede">
          Notes, live classes, tests and fee collection on one page that opens
          on any phone. Students don&rsquo;t install anything, and we never take
          a cut of your fees.
        </p>

        <div className="hero__actions">
          <a className="btn btn--primary btn--lg" href="#pricing">
            Start your 14-day free trial
          </a>
          <a className="btn btn--ghost btn--lg" href="#fees">
            See how fees reach you
          </a>
        </div>

        <p className="hero__note">
          No card needed. After the trial,{" "}
          <strong>
            ₹{monthlyOnYearly.toLocaleString("en-IN")} a month on the yearly
            plan
          </strong>
          , for 10 students or 500.
        </p>
      </div>

      <div className="hero__visual">
        <PhoneMock />
      </div>
    </div>
  );
}
