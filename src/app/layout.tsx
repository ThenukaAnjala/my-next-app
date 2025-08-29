// src/app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Created with Next.js and Tailwind CSS",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // optional:
  // maximumScale: 1,
  // viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="m-0 bg-[#100716] text-white">{children}</body>
    </html>
  );
}
