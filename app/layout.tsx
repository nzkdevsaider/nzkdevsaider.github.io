import "./globals.css";
import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import { Crimson_Pro } from "next/font/google";
import RESUME_DATA from "@/lib/cv.json";

const crimson = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
});

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
      <body className={`${crimson.className} antialiased min-h-screen`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
