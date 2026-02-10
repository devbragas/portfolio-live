import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    { path: "./satoshi/Satoshi-Regular.woff2", weight: "400" },
    { path: "./satoshi/Satoshi-Medium.woff2", weight: "500" },
    { path: "./satoshi/Satoshi-Bold.woff2", weight: "700" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});
