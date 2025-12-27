import type { Metadata } from "next";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";

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
      <body className="antialiased">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
