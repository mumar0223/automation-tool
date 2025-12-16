import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Automation Playground",
  description: "A playground for testing automation scripts.",
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
