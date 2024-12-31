import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToggleProvider } from "./context/ToggleContex";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexoqod-portfolio app",
  description: "World best web agency company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ToggleProvider>

        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          cz-shortcut-listen="true"
          data-new-gr-c-s-check-loaded="14.1215.0"
          data-gr-ext-installed=""
          data-gr-ext-disabled="forever"

        >
          {children}
        </body>
      </ToggleProvider>
    </html>
  );
}
