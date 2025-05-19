import React, { useState } from "react";

export function Game() {
  const [overlayColor, setOverlayColor] = useState("rgba(255,0,0,0.3)");

  return (
    <view style={{ position: "relative", width: 300, height: 300 }}>
      <image src="https://picsum.photos/300/300" style={{ width: 300, height: 300 }} />
      <view
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: overlayColor,
          pointerEvents: "none",
        }}
      />
      <text
        onClick={() =>
          setOverlayColor(
            overlayColor === "rgba(255,0,0,0.3)" ? "rgba(0,0,255,0.3)" : "rgba(255,0,0,0.3)"
          )
        }
        style={{
          position: "absolute",
          bottom: 10,
          width: "100%",
          textAlign: "center",
          backgroundColor: "#fff",
          padding: 10,
          borderRadius: 5,
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        Ganti Warna
      </text>
    </view>
  );
}
