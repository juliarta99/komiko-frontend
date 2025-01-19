import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const openGraph = {
    type: "website",
    url: "https://example.com",
    title: "Komiko",
    description: "Website Baca Komik Bahasa Indonesia",
    siteName: "Komiko",
    images: [{
      url: "https://example.com/og.png",
    }],
}

export const metadata: Metadata = {
  title: "Komiko",
  description: "Website Baca Komik Bahasa Indonesia",
  keywords: ["website komik", "komik bahasa indonesia", "web baca komik", "mahwa", "manhua", "website baca komik bahasa indonesia", "website baca manhwa", "manga", "baca komik", "web komik", "web komik manhwa"],
  openGraph: openGraph
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
