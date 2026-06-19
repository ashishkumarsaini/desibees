import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "DesiBees — Something good is taking shape";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "#f7f5ee",
          background:
            "radial-gradient(circle at 15% 20%, #242b50 0%, transparent 38%), linear-gradient(125deg, #0b0c12, #050609 70%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 18,
              height: 18,
              display: "flex",
              borderRadius: 5,
              background: "#f1c75b",
              transform: "rotate(30deg)",
            }}
          />
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 82, letterSpacing: -4 }}>
            Something good
          </div>
          <div style={{ display: "flex", color: "#b8bcf6", fontSize: 82, letterSpacing: -4 }}>
            is taking shape.
          </div>
          <div style={{ display: "flex", marginTop: 30, color: "#9a9998", fontSize: 23 }}>
            A new independent digital project. Coming soon.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
