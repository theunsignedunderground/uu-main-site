// components/Logo.js
import React from "react";

// Simple <img> for SVGs and PNGs in /public
// Props: variant = "dark" | "light", type = "logo" | "wordmark"
export default function Logo({
  variant = "dark",
  type = "logo",
  width = 180,
  height = 44,
  alt = "The Unsigned Underground",
}) {
  // Adjust these filenames to match exactly what you uploaded
  const base = "/brand/logos";
  let file = "";

  if (type === "wordmark") {
    file = variant === "light"
      ? `${base}/TheUnsignedUnderground-OnWhite.svg'`
      : `${base}/TheUnsignedUnderground-OnWhite.png'`;
  } else {
    file = variant === "light"
      ? `${base}/TheUnsignedUnderground-OnBlack.png'`
      : `${base}/TheUnsignedUnderground-OnBlack.svg'`;
  }

  return (
    <img
      src={file}
      width={width}
      height={height}
      alt={alt}
      style={{ display: "block" }}
    />
  );
}
