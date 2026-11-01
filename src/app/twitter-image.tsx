import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const alt = `${site.name}: a micro teaching platform for independent tutors in India.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Anek Latin, pinned to the two instances the site itself sets. Vendored so the
// card renders identically offline and in CI.
const face = (file: string) =>
  readFile(join(process.cwd(), "src/assets", file));

export default async function OgImage() {
  const [display, text, mark] = await Promise.all([
    face("AnekLatin-Display.ttf"),
    face("AnekLatin-Text.ttf"),
    // Satori cannot resolve a public/ path, so the mark is inlined.
    readFile(join(process.cwd(), "public/icon-192.png")),
  ]);
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#050e3a",
          // The mark's own fall of light: azure in the corner, navy below.
          backgroundImage:
            "linear-gradient(135deg, #1b48c8 0%, #0d2a86 26%, #050e3a 62%)",
          padding: "64px 72px",
          fontFamily: "Anek Text",
          color: "#e7f0ff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markSrc} width={44} height={44} alt="" />
          <span style={{ fontFamily: "Anek Display", fontSize: 31, letterSpacing: "-0.03em" }}>
            LearnMints
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Anek Display",
              fontSize: 82,
              lineHeight: 1.04,
              letterSpacing: "-0.035em",
              maxWidth: 900,
            }}
          >
            {site.tagline}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 29,
              lineHeight: 1.45,
              color: "#8fa6dd",
              maxWidth: 800,
            }}
          >
            Notes, live classes, quizzes and same-day UPI fees, for independent
            tutors across India.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "Anek Display",
              background: "#4f9ffb",
              color: "#050e3a",
              fontSize: 29,
              padding: "11px 22px",
              borderRadius: 8,
            }}
          >
            ₹24,000 a year, flat
          </div>
          <div style={{ display: "flex", fontSize: 25, color: "#6d84c0" }}>
            No commission on your fees
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Anek Display", data: display, weight: 800, style: "normal" },
        { name: "Anek Text", data: text, weight: 400, style: "normal" },
      ],
    },
  );
}
