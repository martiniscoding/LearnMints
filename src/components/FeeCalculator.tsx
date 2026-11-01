"use client";

import { useId, useState } from "react";
import { site } from "@/lib/site";

const inr = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });
const money = (n: number) => `₹${inr.format(Math.round(n))}`;

const MIN = 60_000;
const MAX = 2_400_000;
const COMMISSION = 0.08;

/** Below this, a percentage cut is genuinely cheaper than our flat fee. */
const BREAK_EVEN = site.priceInr / COMMISSION;

export default function FeeCalculator() {
  const id = useId();
  const [income, setIncome] = useState(480_000);

  const commissionCost = income * COMMISSION;
  const difference = commissionCost - site.priceInr;
  const fill = (income - MIN) / (MAX - MIN);

  return (
    <div className="calc" style={{ "--fill": fill } as React.CSSProperties}>
      <label className="calc__label" htmlFor={id}>
        Tuition you collect in a year
      </label>
      <output className="calc__amount" htmlFor={id}>
        {money(income)}
      </output>

      <input
        id={id}
        type="range"
        min={MIN}
        max={MAX}
        step={10_000}
        value={income}
        onChange={(e) => setIncome(Number(e.target.value))}
        aria-label="Tuition you collect in a year, in rupees"
        aria-valuetext={`${money(income)} a year`}
      />
      <div className="calc__scale" aria-hidden="true">
        <span>₹60,000</span>
        <span>₹24,00,000</span>
      </div>

      <div className="calc__split">
        <div className="calc__cell calc__cell--them">
          <p className="calc__cell-label">A platform that takes 8% of your fees</p>
          <strong>{money(commissionCost)}</strong>
          <small>Grows every time you add a student</small>
        </div>
        <div className="calc__cell calc__cell--us">
          <p className="calc__cell-label">LearnMints</p>
          <strong>{money(site.priceInr)}</strong>
          <small>The same figure at any size</small>
        </div>
      </div>

      <p className="calc__verdict" role="status">
        {difference > 0 ? (
          <>
            You keep <b>{money(difference)}</b> more a year, and you keep all of
            it again the year after.
          </>
        ) : (
          <>
            Below about <b>{money(BREAK_EVEN)}</b> a year, a commission plan is
            the cheaper deal — and we would rather say so. Above it, flat pricing
            wins, and the gap only widens.
          </>
        )}
      </p>
    </div>
  );
}
