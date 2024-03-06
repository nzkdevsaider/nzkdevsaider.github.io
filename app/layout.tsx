import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import RESUME_DATA from "@/lib/cv.json";
const { basics } = RESUME_DATA;

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
