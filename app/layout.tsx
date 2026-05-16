import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import RESUME_DATA from "@/lib/cv.json";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import StickerContainer from "@/components/organisms/StickerContainer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

// const geistMono = Geist_Mono({
//   subsets: ["latin"],
//   variable: "--font-geist-mono",
// });

// Metadata
const { basics } = RESUME_DATA;

export const metadata: Metadata = {
  title: `${basics.name} | ${basics.label}`,
  description: basics.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geist.className} antialiased min-h-screen relative`}>
        <StickerContainer />
        <main className="container m-auto md:max-w-4xl p-2 md:p-16">
          <Header />
          <div className="flex flex-col shadow-xl border-2 border-base-300/25 bg-base-100 rounded-3xl overflow-hidden">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
