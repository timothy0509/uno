import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Fredoka, Nunito } from "next/font/google";

export const metadata: Metadata = {
  title: "UNO No Mercy",
  description: "Play UNO No Mercy online - the brutal variant of UNO",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${fredoka.variable} ${nunito.variable}`}
    >
      <body className="gradient-bg font-body min-h-screen">{children}</body>
    </html>
  );
}
