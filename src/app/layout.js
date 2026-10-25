import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { SITE_URL, SITE_NAME, SITE_SHORT_NAME, OG_IMAGE } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_DESCRIPTION =
  "國立政治大學商學院永續財務決策研究中心（政大永續財務中心，NCCU Commerce Sustainable Finance Center, SFC），致力於永續財務、永續金融、ESG、氣候風險與永續資訊揭露研究，並推出 AI 永續報告書判讀系統 SustainFRE。";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s｜${SITE_SHORT_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "國立政治大學商學院永續財務決策研究中心",
    "政大永續財務決策研究中心",
    "政大永續財務中心",
    "政治大學",
    "政大商學院",
    "NCCU",
    "SFC",
    "NCCU Commerce Sustainable Finance Center",
    "永續財務",
    "永續金融",
    "ESG",
    "永續報告書",
    "永續報告書判讀",
    "永續資訊揭露",
    "SustainFRE",
  ],
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: "/",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  icons: {
    icon: "/sfc_logo.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "yBZ6scYD44P2jNBSBFe5RdULuuGy2nepj_USkH5gY8s",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
