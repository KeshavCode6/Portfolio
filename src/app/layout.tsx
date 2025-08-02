import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import localFont from 'next/font/local'
import { ThemeProvider } from "@/components/theme";

export const metadata: Metadata = {
  title: "Keshav Shah",
  description: "Keshav Shah's personal protfolio!",

};

const FunnelSans = localFont({ src: './fonts/FunnelSans.ttf' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${FunnelSans.className} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
