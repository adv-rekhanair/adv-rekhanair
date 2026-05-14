import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rekha Nair — Advocate, Kerala High Court";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #1c1917 0%, #292524 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
        position: "relative",
      }}
    >
      {/* Decorative border */}
      <div
        style={{
          position: "absolute",
          inset: "24px",
          border: "1px solid #78350f",
          borderRadius: "4px",
          opacity: 0.4,
        }}
      />

      {/* Scales of Justice icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-1 -1 26 26"
        fill="none"
        stroke="#b45309"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="80"
        height="80"
      >
        <line x1="12" y1="3" x2="12" y2="21" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="6" x2="5" y2="13" />
        <line x1="3" y1="6" x2="1" y2="13" />
        <path d="M1 13 Q3 16 5 13" />
        <line x1="21" y1="6" x2="23" y2="13" />
        <line x1="21" y1="6" x2="19" y2="13" />
        <path d="M19 13 Q21 16 23 13" />
        <line x1="9" y1="21" x2="15" y2="21" />
      </svg>

      {/* Name */}
      <div
        style={{
          color: "#fef3c7",
          fontSize: "72px",
          fontWeight: "700",
          letterSpacing: "-1px",
          marginTop: "28px",
          fontFamily: "Georgia, serif",
        }}
      >
        Rekha Nair
      </div>

      {/* Title */}
      <div
        style={{
          color: "#b45309",
          fontSize: "28px",
          letterSpacing: "3px",
          marginTop: "12px",
          textTransform: "uppercase",
        }}
      >
        Advocate · Kerala High Court
      </div>

      {/* Divider */}
      <div
        style={{
          width: "120px",
          height: "1px",
          background: "#78350f",
          marginTop: "32px",
        }}
      />

      {/* Practice areas */}
      <div
        style={{
          color: "#a8a29e",
          fontSize: "20px",
          marginTop: "28px",
          letterSpacing: "1px",
        }}
      >
        Civil Litigation · Family Law · Property Disputes · SARFAESI Act
      </div>
    </div>,
    { ...size },
  );
}
