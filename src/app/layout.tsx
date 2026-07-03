import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RB Library — Your Second Home for Studying | Sagar Pur, Delhi",
  description:
    "RB Library is a premium study library in Sagar Pur, New Delhi. AC, Wi-Fi, power backup, personal lockers. Ideal for UPSC, SSC CGL, JEE, NEET, CA preparation. Memberships starting ₹500/month.",
  keywords: [
    "library",
    "study space",
    "reading hall",
    "Sagar Pur",
    "Delhi",
    "UPSC preparation",
    "SSC CGL",
    "JEE preparation",
    "NEET preparation",
    "CA study",
    "Vashist Park",
    "Gandhi Market",
    "Palam",
  ],
  openGraph: {
    title: "RB Library — Your Second Home for Studying | Sagar Pur, Delhi",
    description:
      "Air-conditioned, Wi-Fi enabled study library in Sagar Pur with flexible memberships. Perfect for UPSC, SSC, JEE, NEET & CA aspirants.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
