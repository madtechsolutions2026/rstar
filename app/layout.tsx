import type { Metadata } from "next";
import "./globals.css";
import "./showroom.css";
import "./home-sections.css";

export const metadata: Metadata = {
  title: "R Star Interiors | Thoughtful interiors. Timeless spaces.",
  description: "A considered approach to residential interiors. Explore the R Star Interiors concept studio, quotation builder and business dashboard.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
