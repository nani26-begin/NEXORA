import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "NEXORA | Not Just a Mall. A Global Platform.",
  description: "Experience the future of retail and entertainment at The Dubai Mall with NEXORA's cinematic interactive platform.",
  keywords: ["Dubai Mall", "Luxury Retail", "Entertainment", "NEXORA", "Interactive Sales", "Retail Platform"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className={`${outfit.variable} font-sans min-h-full flex flex-col bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}

