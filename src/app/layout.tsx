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
  title: "RB Library — Premium Study Space in GTB Nagar, Delhi",
  description:
    "RB Library is a premium reading hall & study library in GTB Nagar, New Delhi. AC, Wi-Fi, power backup, personal lockers. Memberships starting ₹800/month.",
  keywords: [
    "library",
    "study space",
    "reading hall",
    "GTB Nagar",
    "Delhi",
    "UPSC preparation",
    "CA study",
    "Hudson Lane",
  ],
  openGraph: {
    title: "RB Library — Premium Study Space in Delhi",
    description:
      "Air-conditioned, Wi-Fi enabled reading hall with flexible memberships. Located on Hudson Lane, GTB Nagar.",
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
