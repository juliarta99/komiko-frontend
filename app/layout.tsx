import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const openGraph = {
    type: "website",
    url: "https://komiko.invitizeme.com",
    title: "Komiko",
    description: "Website Baca Komik Bahasa Indonesia",
    siteName: "Komiko",
    images: [{
      url: "/bg.webp",
    }],
}

export const metadata: Metadata = {
  title: "Komiko",
  description: "Website Baca Komik Bahasa Indonesia",
  keywords: ["website komik", "komik bahasa indonesia", "web baca komik", "mahwa", "manhua", "website baca komik bahasa indonesia", "website baca manhwa", "manga", "baca komik", "web komik", "web komik manhwa"],
  openGraph: openGraph,
  icons: {
    icon: "/logo_komiko.svg",
    shortcut: "/logo_komiko.svg",
    apple: "/logo_komiko.svg",
  }
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
