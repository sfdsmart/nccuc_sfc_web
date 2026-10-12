import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "國立政治大學商學院永續財務決策研究中心",
  description: "NCCU Commerce Sustainable Finance Center 國立政治大學商學院永續財務決策研究中心",
  icons: {
    icon: "/sfc_logo.png",
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
