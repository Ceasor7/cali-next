import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import SiteHeader from "@/components/Header/SiteHeader";
import { siteConfig } from "@/config/site";

const geistMono = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    url: "https://www.cali.institute/",
    siteName: "Creative Arts Leadership Institute",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`$ ${geistMono.variable} antialiased`}>
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
