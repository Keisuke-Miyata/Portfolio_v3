import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes"
import Script from "next/script"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keisuke Miyata",
  description: "Welcome to Kei's personal portfolio showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/alphabet-k-icon.png" type="image/png" />
      <Script src="https://kit.fontawesome.com/5fd9aaf434.js" crossOrigin="anonymous"></Script>
      </head>
      <body className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
            storageKey="theme"
            enableSystem={true}
            defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
